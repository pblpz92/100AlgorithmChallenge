export function findEmailDomain(address: string): string {
    return (address.substring(address.lastIndexOf("@") + 1));
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
