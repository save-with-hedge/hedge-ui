const baseUrl = 'https://api.savewithhedge.co/v1';
// const baseUrl = 'http://localhost:8000/v1';
const authUsername = '';
const authPassword = '';
const basicAuthEncoded = btoa(`${authUsername}:${authPassword}`);

export const createAccountLink = async (
    first: string,
    last: string,
    phone: string,
    stateAbbr: string,
    book: string
) => {
    const url = 'https://api.savewithhedge.co/v1/bettors/link';
    const body = {
        'first': first,
        'last': last,
        'phone': phone,
        'book': book,
        'state_abbr': stateAbbr,
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Basic ${basicAuthEncoded}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (error) {
        console.log(`Error: failed to fetch an account link ${error}`);
    }
};

export const getBooks = async () => {
    const url  = baseUrl.concat('/books');
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Basic ${basicAuthEncoded}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.log(`Error: failed to fetch books`);
    }
};

export const getRegionsForBook = async (book_name: string) => {
    const url = baseUrl.concat(`/books/${book_name}/regions`);
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Basic ${basicAuthEncoded}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        console.log(`Error: failed to fetch regions for book ${book_name}`);
    }
}
