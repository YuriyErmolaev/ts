"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
//Mixin:
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
// const list = ExtendedList(List);
const list = ExtendedList(AccordionList);
const res_ = new list(['first', 'second']);
console.log(res_.first());
