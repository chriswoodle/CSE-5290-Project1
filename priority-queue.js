// Based on:
// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/

class Item {
    value;
    priority;
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {

    items = [];

    enqueue(value, priority) {
        // creating object from queue element 
        var node = new Item(value, priority);
        var contain = false;

        // iterating through the entire 
        // item array to add element at the 
        // correct location of the Queue 
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > node.priority) {
                // Once the correct location is found it is 
                // enqueued 
                this.items.splice(i, 0, node);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority 
        // it is added at the end of the queue 
        if (!contain) {
            this.items.push(node);
        }
    }

    dequeue() {
        // return the dequeued element 
        // and remove it. 
        // if the queue is empty 
        // returns Underflow 
        if (this.isEmpty())
            return null;
        return this.items.shift().value;
    }

    rear() {
        // returns the lowest priorty 
        // element of the queue 
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    front() {
        // returns the highest priority element 
        // in the Priority queue without removing it. 
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        // return true if the queue is empty. 
        return this.items.length == 0;
    }
}

module.exports = {
    PriorityQueue
}