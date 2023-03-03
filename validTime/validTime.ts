export function validTime(time: string): boolean {
    let timesToNumber: string[] = time.split(":");

    for (let i = 0; i < timesToNumber.length; i++) {
        if (i == 0) {
            if (Number.parseInt(timesToNumber[i]) < 0 || Number.parseInt(timesToNumber[i]) > 24) {
                return false;
            }
        } else {
            if (Number.parseInt(timesToNumber[i]) < 0 || Number.parseInt(timesToNumber[i]) > 59) {
                return false;
            }
        }
    }

    return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));