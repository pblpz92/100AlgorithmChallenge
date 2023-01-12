export function chunkyMonkey(arr: any[], size: number): any[][] {
    const result: any = [];

    while (arr.length > 0 && size > 0) {
        result.push(arr.splice(0, size));
    }

    return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));