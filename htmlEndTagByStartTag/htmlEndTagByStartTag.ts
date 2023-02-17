export function htmlEndTagByStartTag(startTag: string): string {
    const splittedWord = startTag.split(" ");
    const opening = "</";
    const closing = ">"

    let result = opening.concat(splittedWord[0].substring(1));

    return result.indexOf(">") !== -1 ? result : result.concat(closing);    
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));