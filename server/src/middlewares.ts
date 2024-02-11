import type { Application } from "express";
import { json } from "express";

export function registerAppMiddlewares(app: Application) {
  app.use(json());
}
