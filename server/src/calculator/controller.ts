import { Request, Response } from "express";
import calculatorControlerValidator from "./validator";

const validator = calculatorControlerValidator();

// sum
export function sumController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);
  const num2 = Number(body.b);

  if (!validator.validateNumbersOperation(num1, num2)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  const result = num1 + num2;

  return response.send({ result });
}

// sub
export function subController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);
  const num2 = Number(body.b);

  if (!validator.validateNumbersOperation(num1, num2)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  const result = num1 - num2;

  return response.send({ result });
}

//div
export function divController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);
  const num2 = Number(body.b);

  if (!validator.validateNumbersOperation(num1, num2)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }
  const result = num1 / num2;

  return response.send({ result });
}

//mult
export function multController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);
  const num2 = Number(body.b);

  if (!validator.validateNumbersOperation(num1, num2)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }
  const result = num1 * num2;

  return response.send({ result });
}

//sqrt
export function sqrtController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  const result = Math.sqrt(num1);

  return response.send({ result });
}

//meters to cm
export function metersCmController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  const result = num1 * 100;

  return response.send({ result });
}

//meters to km
export function metersKmController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  const result = num1 / 1000;

  return response.send({ result });
}

//primeNumber
export function primeNumberController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
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

//even number
export function evenNumberController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }
  function even(number: number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const result = even(num1);

  return response.send({ result });
}

//odd number
export function oddNumberController(request: Request, response: Response) {
  const body = request.body;
  const num1 = Number(body.a);

  if (!validator.validateNumbersOperation(num1)) {
    return response.status(422).send({ message: "your entries are invalid" });
  }

  function odd(number: number) {
    if (number % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  const result = odd(num1);

  return response.send({ result });
}