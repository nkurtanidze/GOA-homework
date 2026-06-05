const os = require("os");

// 1
console.log("=== Task 1 ===");
console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());



// 2
console.log("\n=== Task 2 ===");
console.log("Free Memory:", os.freemem()); // თავისუფალი RAM
console.log("Total Memory:", os.totalmem()); // სრული RAM



// 3
console.log("\n=== Task 3 ===");
console.log("Uptime (seconds):", os.uptime());




// 4
console.log("\n=== Task 4 ===");
const cpus = os.cpus();
console.log("CPU Count:", cpus.length);

cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model}`);
});




// 5
console.log("\n=== Task 5 ===");
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());





// 6
console.log("\n=== Task 6 ===");
console.log("Process ID:", process.pid);
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);




// 7
console.log("\n=== Task 7 ===");
const name = process.argv[2] || "User";
console.log(`Hello, ${name}`);




// 8
console.log("\n=== Task 8 ===");
console.log("Current Working Directory:", process.cwd());
console.log("Directory Name:", __dirname);




// 9
console.log("\n=== Task 9 ===");
setTimeout(() => {
    console.log("3 seconds passed!");
}, 3000);





// 10
console.log("\n=== Task 10 ===");
const interval = setInterval(() => {
    console.log("Program running...");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Program stopped.");
    process.exit();
}, 5000);