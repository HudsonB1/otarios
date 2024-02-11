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

  const result = Math.sqrt(num1);

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

//meters to km
export function metersKmController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;

  if (!num1) {
    return response.status(422).send({ message: "a must be provided" });
  }

  if (typeof num1 !== "number") {
    return response.status(422).send({ message: "a must be numbers" });
  }

  const result = num1 / 1000;

  return response.send({ result });
}

//primeNumber
export function primeNumberController(request: Request, response: Response) {
  const body = request.body;
  const num1 = body.a;

  if (!num1) {
    return response.status(422).send({ message: "a must be provided" });
  }

  if (typeof num1 !== "number") {
    return response.status(422).send({ message: "a must be numbers" });
  }

  function primo(number: number) {
    if (number <= 1) {
      return false; // Os números menores ou  iguais a  1 não são primos
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // Encontrou um divisor diferente de  1 e do próprio número
      }
    }
    return true; // Não encontrou outros divisores além de  1 e do próprio número
  }

  const result = primo(num1);

  return response.send({ result });
}