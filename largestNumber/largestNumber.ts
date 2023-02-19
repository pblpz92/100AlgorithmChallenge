export function largestNumber(n: number): number {
    let answer: string = "";

    while (n > 0) {
        answer = answer.concat('9');
        n--;
    }

    console.log(answer);

    return parseInt(answer);
}

console.log(largestNumber(2));