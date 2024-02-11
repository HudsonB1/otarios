import express from "express";
import { registerAppMiddlewares } from "./middlewares";
import { registerAppRoutes } from "./routes";

const app = express();
const port = 8000;

registerAppMiddlewares(app);
registerAppRoutes(app);

app.listen(port, () => {
  console.log("Server funcionando na porta: " + port);
});

export default app;
