export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let myStrongArm: number = Math.max(yourLeft, yourRight);
    let myTotalStrength: number = yourRight + yourLeft;

    let friendStrongArm: number = Math.max(friendsLeft, friendsRight);
    let friendsTotalStrength: number = friendsRight + friendsLeft;

    return myStrongArm === friendStrongArm && myTotalStrength === friendsTotalStrength;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
