export function firstDuplicate(a: number[]): number {
  
    let index = a.length;

    for (let i = 0; i < a.length; i++) {            
        if (a.indexOf(a[i], i+1) !== -1 && a.indexOf(a[i], i+1) < index) {
            index = a.indexOf(a[i], i+1);
        }
    }
    
    return index === a.length ? -1 : a[index];
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));