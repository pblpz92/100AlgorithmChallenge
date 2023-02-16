export function houseNumbersSum(inputArray: number[]): number {

    let totalSum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) {
            totalSum += inputArray[i];
        } else {
            break;
        }
    }

    return totalSum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));