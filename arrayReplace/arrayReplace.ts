export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([3, 5, 2, 4, 5], 5, 0));