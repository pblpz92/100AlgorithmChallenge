export function boxBlur(image: number[][]): number[][] {
    let totalSum: number = 0;
    let totalItems: number = 0;

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            totalSum += image[i][j];
            totalItems++;
        }
    }
    
    return [[Math.floor(totalSum/totalItems)]];
}

 console.log(boxBlur([[1, 1, 1], 
     [1, 7, 1], 
     [1, 1, 1]]));