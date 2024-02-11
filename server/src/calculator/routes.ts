import { Router } from "express";
import { subController, sumController, divController } from "./controller";

const calculatorRoutes = Router();

calculatorRoutes.post("/sum", sumController);

calculatorRoutes.post("/sub", subController);

calculatorRoutes.post("/div", divController);

export default calculatorRoutes;
