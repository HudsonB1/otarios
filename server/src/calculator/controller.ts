import { Request, Response } from "express";


// sum
export function sumController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;
  const num2 = body.b;

  if (!num1 || !num2) {
    return response.status(422).send({ message: "a or b must be provided" });
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return response.status(422).send({ message: "a and b must be numbers" });
  }

  const result = num1 + num2;

  return response.send({ result });
}

// sub
export function subController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;
  const num2 = body.b;

  if (!num1 || !num2) {
    return response.status(422).send({ message: "a or b must be provided" });
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return response.status(422).send({ message: "a and b must be numbers" });
  }

  const result = num1 - num2;

  return response.send({ result });
}

export function divController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;
  const num2 = body.b;

  if (!num1 || !num2) {
    return response.status(422).send({ message: "a or b must be provided" });
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return response.status(422).send({ message: "a and b must be numbers" });
  }

  const result = num1 / num2;

  return response.send({ result });
}