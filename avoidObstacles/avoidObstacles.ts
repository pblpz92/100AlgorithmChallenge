import { isTemplateExpression } from "typescript";

export function avoidObstacles(inputArray: number[]): number {

    inputArray.sort();    
    const greatestValue: number = inputArray[inputArray.length-1];
    let response: number = -1;
    
    for (let i = 1; i < greatestValue+1; i++) {
        if (inputArray.every((item) => item%i!==0)) {
            response = i;
            break;
        }
    }

    return response;
}


console.log(avoidObstacles([5, 3, 6, 7, 9]));