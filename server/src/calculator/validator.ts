import { Router } from "express";

export default function calculatorControlerValidator() {

    return {
        validateNumbersOperation,
    };
}
function validateNumbersOperation(num1: unknown, num2: unknown = 0) {

    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return false;
    }

    return true;
}
