class Queue {
    front = 0;
    back = -1;

    queue = [];

    enqueue(node) {
        this.back++;
        this.queue[this.back] = node;
    }

    dequeue() {
        if (this.isEmpty())
            return null;

        var node = this.queue[this.front];
        this.front++;
        return node;
    }

    isEmpty() {
        return this.front == this.back + 1;
    }

    peek() {
        return this.queue[this.front];
    }

    get items() {
        return this.queue;
    }
}

module.exports =  {
    Queue
}