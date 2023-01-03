export function alternatingSums(a: number[]): number[] {

    let team1: number = 0;
    let team2: number = 0;

    for (let i = 0; i < a.length; i++) {
        if (i%2===0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }

    return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))