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

//div
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

//mult
export function multController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;
  const num2 = body.b;

  if (!num1 || !num2) {
    return response.status(422).send({ message: "a or b must be provided" });
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return response.status(422).send({ message: "a and b must be numbers" });
  }

  const result = num1 * num2;

  return response.send({ result });
}

//sqrt
export function sqrtController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;

  if (!num1) {
    return response.status(422).send({ message: "a must be provided" });
  }

  if (typeof num1 !== "number") {
    return response.status(422).send({ message: "a must be numbers" });
  }

  const result = Math.sqrt(num1) ;

  return response.send({ result });
}

//meters to cm
export function metersCmController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;

  if (!num1) {
    return response.status(422).send({ message: "a must be provided" });
  }

  if (typeof num1 !== "number") {
    return response.status(422).send({ message: "a must be numbers" });
  }

  const result = num1 * 100;

  return response.send({ result });
}