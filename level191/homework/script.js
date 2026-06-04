// 1) Buffer "Hello World"
        const buffer1 = Buffer.from("Hello World");
        console.log(buffer1);
        console.log([...buffer1]);



        
        // 2) Buffer -> String
        const text = "Hello Node.js";
        const buffer2 = Buffer.from(text);
        console.log(buffer2.toString());




        // 3) 10-byte Buffer
        const buffer3 = Buffer.alloc(10);
        buffer3.write("Nika");
        console.log(buffer3.toString());




        // 4) Buffer.concat
        const part1 = Buffer.from("Hello ");
        const part2 = Buffer.from("World");
        const combined = Buffer.concat([part1, part2]);
        console.log(combined.toString());




        // 5) Buffer.equals
        const a = Buffer.from("Hello");
        const b = Buffer.from("Hello");
        console.log(a.equals(b));



        // 6) process.pid
        console.log(process.pid);




        // 7) process.cwd()
        console.log(process.cwd());




        // 8) process.argv
        console.log(process.argv);




        // 9) No argument
        if (process.argv.length <= 2) {
            console.log("No argument");
            process.exit();
        }

        console.log("Argument:", process.argv[2]);