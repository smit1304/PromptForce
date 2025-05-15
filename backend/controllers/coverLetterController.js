import { callGemini } from "../services/geminiService.js";
import { data } from "../templates/coverLetterPromptTemplate.js";


export const generateCoverLetter = async (req, res) => {
  
  const { userResume, jobDescription, companyName, jobPosition } = req.body;

  if(!userResume || !jobDescription || !companyName || !jobPosition) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {

    const template = data.promptTemplate;  

    const filledPrompt = template
      .replace("{userResume}", userResume)
      .replace("{jobDescription}", jobDescription)
      .replace("{companyName}", companyName)
      .replace("{jobPosition}", jobPosition); 
    
    // Sends the prompt to OpenAI and waits for the generated summary
    const result = await callGemini(filledPrompt);

    console.log("Generated Cover Letter:", result); // Debugging line to check the generated summary
    
    // Sends the final result as JSON back to the client
    
    res.json({ summary: result.trim() });

  } catch (err) {
    // Handles any errors from the OpenAI service
    res.status(500).json({ error: err.message });
  }
};

