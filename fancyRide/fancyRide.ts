export function fancyRide(travelDistance: number, fares: number[]): string {

    let index: number = -1;    
    const cars: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack","UberSUV"];

    for (let i = 0; i < fares.length; i++) {
        if (fares[i] * travelDistance <= 20) {
            index = i;
        }
    }

    return index === -1 ? "you can pay no car" : cars[index];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));