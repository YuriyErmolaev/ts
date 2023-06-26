interface Data {
    group: number;
    name: string;
}

const dataInput: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'}
]

let resultTemplate = {
    '1': [{group: 1, name: 'a'}, {group: 1, name: 'b'}],
    '2': [{group: 2, name: 'c'}],
}

interface IGroup<T> {
    [key: string]: T[]
}

type key = string|number;

function group<T extends Record<key, any>, K extends keyof T>
(
    inputArray: T[],
    key: K
): IGroup<T>
{
    let accCurKey: key;
    return inputArray.reduce<IGroup<T>>((acc, item): IGroup<T> => {
        accCurKey = item[key];
        if(!acc.hasOwnProperty(accCurKey)) acc[accCurKey] = [];
        acc[accCurKey].push(item);
        return acc;
    }, {});
}

console.log('result group: ', group(dataInput, 'group'));





