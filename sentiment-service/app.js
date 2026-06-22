import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import sentimentRoutes from "./routes/sentimentRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

import swaggerDocument from "./swagger.json" with { type: "json" };

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "Sentiment Service",
    status: "Running"
  });
});

app.use("/api/sentiment", sentimentRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(errorHandler);

export default app;
