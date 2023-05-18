function toString<T>(Input: T): string | undefined {
    if(Array.isArray(Input)) return Input.toString();
    switch (typeof Input){
        case "string": return Input;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return Input.toString();
        case 'object':
            return JSON.stringify(Input);
        default: return undefined;
    }
}

console.log(toString(3));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({a: 1}));

