import { stringLiteral } from "@babel/types";

export function addBorder(picture: string[]): string[] {
    let borderLength: number = picture[0].length;
    const asterisk: string = "*";

    for (let i = 0; i < picture.length; i++) {
        picture[i] = asterisk.concat(picture[i], asterisk);             
    }

    picture.unshift(asterisk.repeat(borderLength + 2));
    picture.push(asterisk.repeat(borderLength + 2));

    return picture;
}

console.log(addBorder(["abc", "ded"]));