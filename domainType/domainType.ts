export function domainType(domains: string[]): string[] {

    const domainType: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        domainType.push(domains[i].substring(domains[i].lastIndexOf(".")+1));
    }

    return domainDescription(domainType);
}

function domainDescription(domainType: string[]): string[] {
    
    const domainDescription: string[] = [];

    for (let i = 0; i < domainType.length; i++) {

        switch(domainType[i]) {
            case "org": {
                domainDescription.push("organization");
                break;
            }
            case "com": {
                domainDescription.push("commercial");
                break;
            }
            case "net": {
                domainDescription.push("network");
                break;
            }
            case "info": {
                domainDescription.push("information");
                break;
            }   
        }
    }

    return domainDescription;
}


console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));