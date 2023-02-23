export function pigLatin(str: string): string {

    let vowelRegexp = /[aeiou]/;

    if (vowelRegexp.test(str[0])) {
        return str.concat("way");
    } else {
        let startIndex = 0;
        let endIndex = 0;

        for (let i = 1; i < str.length; i++) {
            if (vowelRegexp.test(str[i]))     {
                startIndex = i;
                break;
            }
        }

        return str.substring(startIndex).concat(str.substring(0, startIndex)).concat("ay");
    }

    
}

console.log(pigLatin("glove"));
//console.log(pigLatin("eight"));
