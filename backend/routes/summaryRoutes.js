import express from "express";                          // Import Express to use its routing features
import { generateSummary } from "../controllers/summeryController.js";
// Import the controller function to handle summary generation

const router = express.Router();                        // Create a new Express router object

router.post("/generate", generateSummary);              // Define POST route '/summary/generate' that runs generateSummary()

export default router;                                  // Export the router so it can be registered in the app
