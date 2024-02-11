import type { Application } from "express";
import calculatorRoutes from "./calculator/routes";

export function registerAppRoutes(app: Application) {
  app.use("/calculator", calculatorRoutes);
}
