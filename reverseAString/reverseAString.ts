export function reverseAString(str: string): string {

    let response: string = "";

    for (let i = str.length-1; i >= 0; i--) {
        response = response.concat(str[i]);
    }

    return response;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));