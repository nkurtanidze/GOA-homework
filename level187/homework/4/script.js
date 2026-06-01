class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, a, b) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener(a, b));
        }
    }
}

const emitter = new EventEmitter();

emitter.on("sum", (a, b) => {
    console.log(a + b);
});

emitter.emit("sum", 10, 20);