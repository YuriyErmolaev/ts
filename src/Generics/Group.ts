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

function group(inp, key)
{
    let groupKey;
    let res = inp.reduce( (res, item)=>{
        groupKey  = item[key];
        if(!res.hasOwnProperty(groupKey) ) res[groupKey] = [];
        res[groupKey].push(item);
        return res;
    }, {});
    return res;
}

console.log( 'group(dataInput, \'group\') :', group(dataInput, 'group') );
