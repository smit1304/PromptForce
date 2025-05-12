import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callGemini } from "../services/geminiService.js";


// Required for ES Modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(__dirname, "../templates/summaryPromptTemplate.json");
const summaryTemplates = JSON.parse(fs.readFileSync(templatePath, "utf-8"));


export const generateSummary = async (req, res) => {
  const { content, tone } = req.body;
  // Extracts 'content' and 'tone' from the JSON request body

  if (!content || !tone) {
    return res.status(400).json({ error: "Both content and tone are required." });
    // Validates that both values are present — otherwise returns HTTP 400 error
  }
  try {
    const template = summaryTemplates.template; // adujust based on the template structure 
    // Retrieves the prompt template string from the JSON file

    const filledPrompt = template
      .replace("{content}", content)
      .replace("{tone}", tone);
    // Replaces placeholders in the template with actual values provided by the user
    const result = await callGemini(filledPrompt);
    // Sends the prompt to OpenAI and waits for the generated summary

    res.json({ summary: result });
    // Sends the final result as JSON back to the client
  } catch (err) {
    res.status(500).json({ error: err.message });
    // Handles any errors from the OpenAI service
  }
};

