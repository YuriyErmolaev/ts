type Constructor = new (...args: any[])=>{};
type GConstructor<T = {}> = new (...args: any[])=>T;

class List {
    constructor(public items: string[]) { }
}

type ListType = GConstructor{List};

class ExtendedListClass extends List {
    first(){
        return this.items[0];
    }
}
//Mixin:
function ExtendedList<TBase extends ListType>(Base: TBase){
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

const list = ExtendedList(List);
const res2 = new list(['first', 'second']);
console.log(res2.first());
