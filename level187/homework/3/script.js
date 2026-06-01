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

emitter.on("login", () => {
    console.log("User logged in");
});

emitter.on("login", () => {
    console.log("Welcome back!");
});

emitter.emit("login");