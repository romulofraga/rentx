import "reflect-metadata";
import "../../container";
import "../../container/provider";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../swagger.json";
import AppError from "../../errors/AppError";
import routes from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ error: error.message });
    }
    return response
      .status(500)
      .json({ error: `Internal server error - ${error.message}` });
  }
);

export { app };