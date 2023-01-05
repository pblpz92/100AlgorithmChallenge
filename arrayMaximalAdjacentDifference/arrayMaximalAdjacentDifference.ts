export function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let maxDifference: number = 0;
    let currentValue: number = 0;

    for (let i = 0; i < inputArray.length -1; i++) {        
        currentValue = Math.abs(inputArray[i]) - Math.abs(inputArray[i+1]);
        if (currentValue < 0) {
            currentValue*=-1;
        }

        maxDifference = maxDifference < currentValue ? maxDifference = currentValue : maxDifference;
    }

    return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
