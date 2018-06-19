class PriorityQueue {
    constructor() {
        this.queue = []
        this.isSorted = false
    }
    add(e) {
        this.isSorted = false
        this.queue.push(e)
    }

    remove() {
        if (!this.isSorted) {
            this.queue.sort((a, b) => a - b)
            this.isSorted = true
        }
        return this.queue.pop()
    }
}