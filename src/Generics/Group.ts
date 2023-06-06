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
//my realization
const group = (arGroups: Data[], keyGroup: string): object => {
    let result: { [key: string]: Data[] } = {},
        curGroupId: string;
    arGroups.map(groupObj => {
        curGroupId = groupObj.group.toString();
        if (!result[curGroupId]) {
            result[curGroupId] = [];
        }
        result[curGroupId].push(groupObj);
    });
    return result;
}

console.log(group(dataInput, 'group'));

//another realization
interface IGroup {
    [key: string]: T[];
}

type key = number|string|symbol;

// const group2<T> = (arGroups: T[], keyGroup: keyof T): IGroup => {
function group2<T extends Record<key, any>> (arGroups: T[], keyGroup: keyof T): IGroup {
    return arGroups.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        const itemKey = item[keyGroup];
        let curEl = map[itemKey];
        if(Array.isArray(curEl)){
            curEl.push(item);
        } else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}

const res_2 = group2<Data>(dataInput, 'group');
console.log('res_2: ', res_2);
