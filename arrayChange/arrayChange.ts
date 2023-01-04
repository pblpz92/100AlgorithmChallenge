export function arrayChange(inputArray: number[]): number {

    let counter: number = 0;

    for (let i = 1; i < inputArray.length; i++) {
        while (inputArray[i] <= inputArray[i-1]) {
            inputArray[i]++;
            counter++;
        }
    }

    console.log(inputArray);
    return counter;
}

//console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([9, 1, 1]));