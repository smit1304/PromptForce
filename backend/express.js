// express.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
import summaryRouter from "./routes/summaryRoutes.js";  // Import the summary route
import coverLetterRouter from "./routes/coverLetterRoutes.js";  // Import the cover letter route

app.use("/summary", summaryRouter); // Register it under the base path '/summary'
app.use("/coverletter",coverLetterRouter);                     // Register it under the base path '/coverletter'



export default app;
