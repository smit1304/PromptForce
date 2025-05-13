import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";                        // Import dotenv to read environment variables from .env file

dotenv.config();                                    // Load all the .env variables into process.env
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY }); // Create a new instance of GoogleGenAI with the API key from environment variables
console.log("Gemini API Key:", process.env.GOOGLE_API_KEY); // debug this

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();