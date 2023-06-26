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
function group(inputArray, key) {
    let accCurKey;
    return inputArray.reduce((acc, item) => {
        accCurKey = item[key];
        if (!acc.hasOwnProperty(accCurKey))
            acc[accCurKey] = [];
        acc[accCurKey].push(item);
        return acc;
    }, {});
}
console.log('result group: ', group(dataInput, 'group'));
console.log('After result )');
//
//
// function group2<T extends Record<key, any>> (arGroups: T[], keyGroup: keyof T): IGroup<T> {
//     // return {
//     //     '1': [{group: 1, name: 'a'}, {group: 1, name: 'b'}],
//     //     '2': [{group: 2, name: 'c'}],
//     // }
//     return arGroups.reduce<IGroup<T>>((map: IGroup<T>, item) => {
//         // const itemKey = item[keyGroup];
//         // let curEl = map[itemKey];
//         // if(Array.isArray(curEl)){
//         //     curEl.push(item);
//         // } else {
//         //     curEl = [item];
//         // }
//         // map[itemKey] = curEl;
//         // return map;
//     }, {});
// }
// const res_2 = group2<Data>(dataInput, 'group');
// console.log('res_2: ', res_2);
