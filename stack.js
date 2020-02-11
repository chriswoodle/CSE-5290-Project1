class Stack {

    top = -1
    stack = []

    isEmpty() {
        return this.top < 0;
    }

    push(node) {
        this.top++;
        this.stack[this.top] = node;
    }

    pop() {
        if (this.isEmpty())
            return null;

        var node = this.stack[this.top];
        this.top--;
        return node;
    }

    peek() {
        if (this.isEmpty())
            return null;

        return this.stack[this.top];
    }

    get items() {
         return this.stack;
    }
}

module.exports = {
    Stack
}