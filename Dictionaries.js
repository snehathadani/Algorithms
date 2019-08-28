function Dictionary() {
    let items = {};

    this.has = function (key) {
        return key in items;
    };
    //add a new item

    this.set = function (key, value) {
        return items[key] = value;
    };

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    //to serach for a particular item
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
        let values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.keys = function () {
        return Object.keys(items);
    };

    this.getItems= function() {
        return items;
    }
}