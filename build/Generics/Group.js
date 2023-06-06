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
