import { Router } from "express";
import { subController, sumController } from "./controller";

const calculatorRoutes = Router();

calculatorRoutes.post("/sum", sumController);

calculatorRoutes.post("/sub", subController);

export default calculatorRoutes;
