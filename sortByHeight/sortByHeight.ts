export function sortByHeight(a: number[]): number[] {

    let result: number[] = [];
    let people: number[] = a.filter(element => element != -1).sort();
    let peopleIndex = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] == -1) {
            result.push(-1);
        } else {            
            result.push(people[peopleIndex]);            
            peopleIndex++;
        }
    }

    return result;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));