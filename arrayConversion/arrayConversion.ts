import { numberLiteralTypeAnnotation } from "@babel/types";

export function arrayConversion(inputArray: number[]): number {
    
    let operation: String = "sum";

    while (inputArray.length > 1) {
        inputArray = operateConsecutiveElements(inputArray, operation);        
        operation = operation === "sum" ? "mul" : "sum";
    }
    return inputArray[0];
}

function operateConsecutiveElements(inputArray: number[], operation: String): number[] {
    let result: number[] = [];

    for (let i = 0; i < inputArray.length; i = i+2) {      
        if (operation === "sum")  {
            result.push(inputArray[i] + inputArray[i+1]);
        } else {
            result.push(inputArray[i] * inputArray[i+1]);
        }
    }
    return result;
}


console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));



