export function adjacentElementsProduct(inputArray: number[]): number {

    let max: number = inputArray[0] * inputArray[1];

    for (let i = 2; i < inputArray.length; i++) {
        inputArray[i] * inputArray[i-1] > max ? max = inputArray[i] * inputArray[i-1] : max ;
    }

    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));