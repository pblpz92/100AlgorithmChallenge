export function largestOfFour(nums: number[][]): number[] {
    const largestNumbersArray: number[] = [0, 0, 0, 0];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (nums[i][j] > largestNumbersArray[i]) {
                largestNumbersArray[i] = nums[i][j];
            }
        }
    }

    return largestNumbersArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));