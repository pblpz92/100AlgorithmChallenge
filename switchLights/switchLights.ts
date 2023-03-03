export function switchLights(a: number[]): number[] {

    let lit: boolean;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            for (let j = 0; j <= i; j++) {
                a[j] === 0 ? a[j] = 1 : a[j] = 0;                
            }
        }
    }

    return a;
}

 console.log(switchLights([1, 1, 1, 1, 1]));  
 console.log(switchLights([0, 0]));
 console.log(switchLights([1, 0]));
 console.log(switchLights([0, 0, 1]));