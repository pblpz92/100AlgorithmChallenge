export function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let prosPreferences = {};

    for (let i = 0; i < pros.length; i++) {
        for (let j = 0; j < preferences[i].length; j++) {
            if (prosPreferences.hasOwnProperty(preferences[i][j])) {
                prosPreferences[preferences[i][j]].push(pros[i]);
            } else {
                prosPreferences[preferences[i][j]] = [pros[i]];
            }
        }
    }

    console.log(prosPreferences);
    return [[[]]];
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));