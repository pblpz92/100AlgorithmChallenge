export function findClosestPair(numbers: number[], sum: number): number {

    let closestSumDistance = -1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                if (numbers[i] + numbers[j] === sum) {
                    if (closestSumDistance === -1 || Math.abs(i-j) < closestSumDistance) {
                        closestSumDistance = Math.abs(i-j);
                    }
                }
            }
        }
    }

    return closestSumDistance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));