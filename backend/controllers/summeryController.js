import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callGemini } from "../services/geminiService.js";
import { data } from "../templates/summaryPromptTemplate.js";

// Required for ES Modules to get __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const templatePath = path.join(__dirname, "../templates/summaryPromptTemplate.json");
// const summaryTemplates = JSON.parse(fs.readFileSync(templatePath, "utf-8"));

const MIN_WORD_LIMIT = 10; // Minimum word limit for the summary

export const generateSummary = async (req, res) => {
  const { content, tone, wordLimit } = req.body;
  // Extracts 'content' and 'tone' from the JSON request body

  if (!content || !tone || wordLimit <= MIN_WORD_LIMIT) {
    // Validates that both values are present — otherwise returns HTTP 400 error
    return res.status(400).json({ error: `Both content and tone are required and word limit should be greater than ${MIN_WORD_LIMIT} words.` });
  }
  try {

    // Retrieves the prompt template string from the JSON file
    // adujust based on the template structure
    const template = data.promptTemplate;  

    // Replaces placeholders in the template with actual values provided by the user
    const filledPrompt = template
      .replace("{content}", content)
      .replace("{tone}", tone)
      .replace("{wordLimit}", wordLimit || "1000"); // Default to 1000 words if not provided
    
    // Sends the prompt to OpenAI and waits for the generated summary
    const result = await callGemini(filledPrompt);

    console.log("Generated Summary:", result); // Debugging line to check the generated summary
    
    // Sends the final result as JSON back to the client
    
    res.json({ summary: result.trim() });

  } catch (err) {
    // Handles any errors from the OpenAI service
    res.status(500).json({ error: err.message });
  }
};

