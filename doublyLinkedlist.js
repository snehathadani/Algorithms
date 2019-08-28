function DoublyLinkedList() {
    this.length = 0;
    this.head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    };

    this.insert = function (position, element) {
        let node = new Node(element);
        if (position >= 0 && position <= this.length) {
            let current = this.head;
            //previous;
            let index = 0;
            if (position === 0) {// insert at the first position
                if (!this.head) {
                    this.head = node;
                } else {
                    node.next = current;
                    current.previous = node;
                    this.head = node
                }

            } else {
                while (index < position && current.next !== null) {
                    //previous=current; don't need previous as a reference 
                    current = current.next;
                    index = index + 1;
                }
                if (position === this.length) {
                    current.next = node;
                    node.previous = current;

                } else {
                    node.previous = current.previous;
                    node.next = current;

                    current.previous.next = node;
                    current.previous = node;
                }
            }
            this.length++;
            return true;
        } else {
            return false;
        }

    }
    this.remove = function (position) {
        if (position >= 0 && position < this.length) {
            if (position === 0) {
                let value = this.head.element;
                this.head = this.head.next;
                this.length--;
                if (this.head !== null)
                    this.head.previous = null;
                return value;
            } else {
                current = this.head;
                let index=0;
                while (index < position && current.next !== null) {
                    //previous=current; don't need previous as a reference 
                    current = current.next;
                    index = index + 1;
                }
                let value = current.element
                if (position === this.length - 1) {
                    current.previous.next = null;
                    current.previous = null;
                    this.length--;
                    return value;
                }

                current.previous.next = current.next
                current.next.previous = current.previous;
                this.length--;
                return value;
            }
        }
        return null;

    }
};



let list = new DoublyLinkedList();

list.insert(0, 1);
console.log(list);
list.insert(1, 2)
console.log(list);
list.insert(1, 19);
console.log(list);
list.remove(1);
console.log(list);
list.remove(1);
console.log(list);
list.remove(1);
console.log(list);
list.remove(0);
console.log(list);





























