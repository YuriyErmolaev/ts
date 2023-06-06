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
