export type ContactData = {
    name: string;
}

export function populateContact(start: number, limit: number): ContactData[]  {
    const data: ContactData[] = [];
    for (let index = start; index < start + limit; index++) {
        data.push({"name": `User ${index}`});
    }
    return data;
}