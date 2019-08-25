function PriorityQueue() {
    this.items = [];
    function QueueElement(element, priority) { // {1}
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        
        let insertAt = 0;
        while (insertAt < this.items.length && this.items[insertAt].priority > queueElement.priority) {
            insertAt = insertAt + 1
        }
        this.items.splice(insertAt, 0, queueElement)

        console.log(this.items);
    }
    this.dequeue = function (element, priority) {
        return this.items.shift();
    }
}

let pq = new PriorityQueue();
pq.enqueue(2, 3);
pq.enqueue(1, 2);
pq.enqueue(4, 4);
pq.dequeue();
pq.dequeue();
pq.dequeue();