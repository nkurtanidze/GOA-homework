const RoleContext = {
        role: "admin" 
    };

    function checkRole() {
        const messageElement = document.getElementById("message");

        if (RoleContext.role === "admin") {
            messageElement.textContent = "ადმინ პანელი ხელმისაწვდომია";
        } else {
            messageElement.textContent = "წვდომა შეზღუდულია";
        }
    }
    checkRole();