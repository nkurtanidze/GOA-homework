const input = document.getElementById("textInput");
        const output = document.getElementById("output");

        input.addEventListener("input", () => {
            output.textContent = `You typed: ${input.value}`;
        });