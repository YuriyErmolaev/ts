"use strict";
const dataInput = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' }
];
let resultTemplate = {
    '1': [{ group: 1, name: 'a' }, { group: 1, name: 'b' }],
    '2': [{ group: 2, name: 'c' }],
};
//my realization
const group = (arGroups, keyGroup) => {
    let result = {}, curGroupId;
    arGroups.map(groupObj => {
        curGroupId = groupObj.group.toString();
        if (!result[curGroupId]) {
            result[curGroupId] = [];
        }
        result[curGroupId].push(groupObj);
    });
    return result;
};
console.log(group(dataInput, 'group'));
// const group2<T> = (arGroups: T[], keyGroup: keyof T): IGroup => {
function group2(arGroups, keyGroup) {
    return arGroups.reduce((map, item) => {
        const itemKey = item[keyGroup];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res_2 = group2(dataInput, 'group');
console.log('res_2: ', res_2);
