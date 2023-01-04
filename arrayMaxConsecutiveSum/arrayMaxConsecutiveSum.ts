export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let maxSum: number = 0;
    let currentSum: number = 0;

    for (let i = 0; i < inputArray.length; i++) {
        currentSum = 0;
        for (let j = 0; j < k && i + j  < inputArray.length; j++) {            
            currentSum += inputArray[i+j];            
        }
        currentSum > maxSum ? maxSum = currentSum : maxSum;
    }
    return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));