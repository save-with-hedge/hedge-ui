export const createAccountLink = (
    first: string,
    last: string,
    phone: string,
    stateAbbr: string,
    book: string
) => {
    // const url = 'https://api.savewithhedge.co/v1/bettors/link';
    const url = 'http://localhost:8000/v1/bettors/link';
    const body = {
        'first': first,
        'last': last,
        'phone': phone,
        'book': book,
        'state_abbr': stateAbbr,
    }
    const authUsername= '';
    const authPassword = '';
    const basicAuthEncoded = btoa(`${authUsername}:${authPassword}`);

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': `Basic ${basicAuthEncoded}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("Error: failed to fetch an account link");
        })
}
