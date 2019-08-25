
let _items = Symbol(); ///symbol is immutable & can be used as an object property

class Stack {
    constructor() {
       // this.items= [];
       this[_items] =[];
    }
    push(element){
            this.items.push(element);
    }
}

let stack = new Stack();
this.stack.push(5);
this.stack.push(8);
let objectSymbols= Object.getOwnPropertySymbols(stack);
