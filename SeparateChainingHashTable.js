function HasTable() {
    let table = [];
    //used to retrieve the position of the given key parameter
    let HashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    //Helper Class
    let ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return (`[this.key +  -  + this.value + ] `);
        }
    }

    this.put = function (key, value) {
        let position = HashCode(key);
        //console.log(`position +  ' - ' + key `);
        //table[position] = value;
        if (table[position] === undefined) {
            table[position] = new LinkedList();//initialize with an instance of a linkedList Class
        }
        table[position].append(new ValuePair(key, value));
    };
    //retrieving a vlue

    this.get = function (key) {
        let position = HashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };

    this.remove = function (key) {
        let position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) { 
                    table[position].remove(current.element); 
                    if (table[position].isEmpty()) { 
                        table[position] = undefined; 
                    }
                    return true; //{15}
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) { 
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };



    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {

                console.log(i + ": " + table[i]);
            }
        }
    };
}