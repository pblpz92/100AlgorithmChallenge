export function makeArrayConsecutive2(statues: number[]): number {

    statues.sort();
    let result: number = 0;

    for (let i = statues[0]; i < statues[statues.length-1]; i++) {
        if (statues.indexOf(i) === -1) {
            result++;
        }
    }

    return result;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));