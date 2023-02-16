export function flattenArray(arr: any[]): any[] {

    const newArray: any[] = [];
    flatten(arr);

    function flatten (arr: any[]) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                newArray.push(element);
            }
        });
    }

    return newArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
