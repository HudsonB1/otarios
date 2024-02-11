import { Router } from "express";
import { subController, sumController, divController, multController } from "./controller";

const calculatorRoutes = Router();

calculatorRoutes.post("/sum", sumController);

calculatorRoutes.post("/sub", subController);

calculatorRoutes.post("/div", divController);

calculatorRoutes.post("/mult", multController);




export default calculatorRoutes;
