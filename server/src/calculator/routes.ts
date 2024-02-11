import { Router } from "express";
import { sumController } from "./controller";

const calculatorRoutes = Router();

calculatorRoutes.post("/sum", sumController);

export default calculatorRoutes;
