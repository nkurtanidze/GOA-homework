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

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener());
        }
    }
}

const emitter = new EventEmitter();

emitter.on("hello", () => {
    console.log("Hello World");
});

emitter.emit("hello");