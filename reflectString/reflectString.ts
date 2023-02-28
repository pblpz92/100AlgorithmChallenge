export function reflectString(inputString: string): string {    

    let firstCharNumber: number = 97;
    let lastCharNumber: number = 122;
    let response: string = "";

    for (let i = 0; i < inputString.length; i++) {
        response = response.concat(String.fromCharCode(lastCharNumber - (inputString.charCodeAt(i) - firstCharNumber)))    
    }

    return response;    
}

console.log(reflectString("name")); //mznv
