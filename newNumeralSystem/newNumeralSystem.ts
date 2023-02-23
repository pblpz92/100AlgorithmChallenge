export function newNumeralSystem(number: string): string[] {
    let firstNum: number = 65; //A=0
    let lastNum = number.charCodeAt(0);
    let response: string[] = [];

    console.log(lastNum - firstNum)

    for (let i = 0; i <= (lastNum - firstNum) / 2; i++) {
        response.push(String.fromCharCode(firstNum + i) + " + " + String.fromCharCode(lastNum - i));
    }

    return response;
}

console.log(newNumeralSystem('G'));