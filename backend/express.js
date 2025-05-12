// express.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
import summaryRouter from "./routes/summerRoutes.js";  // Import the summary route
app.use("/summary", summaryRouter);                     // Register it under the base path '/summary'


export default app;
