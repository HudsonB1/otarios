import { Router } from "express";
import { subController, sumController, divController, multController, sqrtController, metersCmController, metersKmController } from "./controller";

const calculatorRoutes = Router();

calculatorRoutes.post("/sum", sumController);

calculatorRoutes.post("/sub", subController);

calculatorRoutes.post("/div", divController);

calculatorRoutes.post("/mult", multController);

calculatorRoutes.post("/sqrt", sqrtController);

calculatorRoutes.post("/meters-cm", metersCmController);

calculatorRoutes.post("/meters-km", metersKmController);



export default calculatorRoutes;
