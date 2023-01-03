export function almostIncreasingSequence(sequence: number[]): boolean {

    let numberToCompare = sequence[0];
    let counter = 0;

    for (let i = 0; i < sequence.length -1; i++) {
        if (numberToCompare < sequence[i+1]) {
            numberToCompare = sequence[i+1];
        } else {
            counter++;
        }
    }

    return counter > 1 ? false : true;
}

//console.log(almostIncreasingSequence([1, 3, 2, 1]));
//console.log(almostIncreasingSequence([1, 3, 2]));
//console.log(almostIncreasingSequence([1, 3, 2, 2]));
//console.log(almostIncreasingSequence([5, 1, 3, 2, 2]));