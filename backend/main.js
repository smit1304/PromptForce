import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";                        // Import dotenv to read environment variables from .env file

dotenv.config();                                    // Load all the .env variables into process.env
const ai = new GoogleGenAI({ apiKey: "AIzaSyA1Jip0qqDvxQm1NnTHBC33kzjybEw5f_k" });
console.log("Gemini API Key:", process.env.GOOGLE_API_KEY); // debug this

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();