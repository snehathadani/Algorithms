function Set() { //Distinct Unordered Values
    let items = {};

    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;// Object.keys returns an array of all the properties of that Object
    };
    //or another way to get  length
    this.sizeLegacy = function () {
        let count = 0;
        for (let key in items) { //iterate thru properties of items
            if (items.hasOwnProperty(key)) //check if the property is really a property of our object
                ++count;
        }
        return count;
    };


    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            //for (let key in this.items) {
            values.push(keys[i]);
        }
        return values;
    };

    this.union = function(otherSet) {
        let unionSet = new Set();
        for (let i in this.values()) {
            unionSet.add(this.values()[i]);
        }
        console.log(otherSet.values());
        for (let i in otherSet.values()) {
            unionSet.add(otherSet.values()[i]);
        }
        return unionSet;
    }

    this.intersection = function(otherSet) {
        let intersectionSet  = new Set();
        for(let i in this.values()) {
            if(otherSet.has(this.values()[i])) {
                intersectionSet.add(this.values()[i])
            }
        }
        return intersectionSet;

    }

    this.difference = function (otherSet) {
        let differenceSet= new Set();
        for (let i in this.values()) {
            console.log(this.values()[i]);
            if (!otherSet.has(this.values()[i])){
               console.log(otherSet.values()[i]);
                differenceSet.add(this.values()[i])
        
            }console.log(otherSet.values()[i]);
        }
        return differenceSet;
      
    }
    /*this.difference = function(setA){
        let differenceSet = new Set();
        for (let x of setA){
        if (!setB.has(x)){ //{1}
        differenceSet.add(x);
        }
        }
        return differenceSet;
        };
        let differenceAB = this.difference(setA, setB); */

}

let set = new Set;


console.log(set.values());


set.add(2);
set.add(1);
set.add(3);
console.log(set.has(1));

console.log(set.values());
let set2 = new Set();
set2.add(4);
set2.add(5);
set2.add(6);

console.log(set2.values())

set.union(set2).values();
set.intersection(set2).values()
set.values();
let set3 = new Set();

set.difference(set2);















