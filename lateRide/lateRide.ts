export function lateRide(n: number): number {

    let hours = Math.floor(n/60).toString();
    let minutes = Math.floor(n%60).toString();

    hours = zeroAppender(hours);
    minutes = zeroAppender(minutes);

    let result = 0;
    for (let i = 0; i < hours.length; i++) {
        result += parseInt(hours[i]) + parseInt(minutes[i]);
    }

    return result;
}

function zeroAppender(s: string): string {
    if (s.length < 2) {
        return '0'.concat(s);
    }
    return s;
}

console.log(lateRide(240));
 console.log(lateRide(808));
