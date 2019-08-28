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

    this.put = function (key, value) {
        let position = HashCode(key);
        console.log(`position +  ' - ' + key `);
        table[position] = value;
    };
    //retrieving a vlue

    this.get = function (key) {
        return table[HashCode(key)];
    };

    this.remove = function (key) {
        table[HashCode(key)] = undefined;
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { 
            if (table[i] !== undefined) {
        
                console.log(i + ": " + table[i]); 
            }
        }
    };
}

var hash = new HasTable();

hash.put('Sneha', "Abc.gmail.com");
hash.put('marie', "bumbleBee.gmail.com");
console.log(hash.get('Sneha'));
hash.put('Sneha', "mean.com");
console.log(hash.get('Sneha'));
hash.print();


