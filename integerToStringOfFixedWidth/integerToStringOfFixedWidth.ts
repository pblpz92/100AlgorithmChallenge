export function integerToStringOfFixedWidth(number: number, width: number): string {
    let numberAsArray: string[] = number.toString().split('');
    let result: string = "";

    if (width === numberAsArray.length) {
        result = number.toString();
    }

    if (width < numberAsArray.length) {
        result = numberAsArray.join("").substring(width);
    }

    if (width > numberAsArray.length) {
        while (numberAsArray.length < width) {
            numberAsArray.unshift("0");
        }
        result = numberAsArray.join("");
    }    
    
    return result;
}

//console.log(integerToStringOfFixedWidth(1234, 2));
//console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
