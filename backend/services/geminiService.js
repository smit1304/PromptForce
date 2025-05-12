import dotenv from "dotenv";                        // Import dotenv to read environment variables from .env file
import { GoogleGenAI } from "@google/genai";

dotenv.config();                                    // Load all the .env variables into process.env

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY // Initialize Google Generative AI with the API key
  
}); // Initialize Google Generative AI with the API key
console.log("Gemini API Key:", process.env.GEMINI_API_KEY); // debug this

export const callGemini = async (prompt) => {      // Function to send prompt to Google Generative AI and get result
  try {
    const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    });
    
    return response.text.trim();
} catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error("Failed to generate response from Gemini");
  }
};
