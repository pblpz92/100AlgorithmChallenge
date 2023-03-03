export function squareDigitsSequence(a0: number): number {

    let sumResults: string[] = [a0.toString()];    
    let repeatedValue = false;
    let loopsDone: number = 1;

    while (!repeatedValue) {
        let currentSum = sumResults[sumResults.length-1].split("");
        let result = 0;

        for (let i = 0; i < currentSum.length; i++) {        
            result += Math.pow(Number.parseInt(currentSum[i]), 2);
        }

        loopsDone++;

        if (sumResults.includes(result.toString())) {
            repeatedValue = true;
        } else {
            sumResults.push(result.toString());            
        }
    }

    return loopsDone;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));