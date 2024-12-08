        // პირველი კითხვა
        let wantsDarkScreen = confirm("გსურთ თუ არა შავი ეკრანი?");
        if (wantsDarkScreen) {
            document.body.classList.add("dark-mode");
        }

        // მეორე კითხვა
        let wantsLargeText = confirm("გსურთ თუ არა დიდი ტექსტი?");
        if (wantsLargeText) {
            document.body.classList.add("large-text");
        }

        // მესამე კითხვა
        let wantsLongText = confirm("გსურთ თუ არა გრძელი ტექსტი?");
        if (wantsLongText) {
            document.body.classList.add("long-text");
        }

        // შედეგი
        document.body.innerHTML = `
            <h1>მომხმარებლის არჩევანი</h1>
            <p>შედეგები: ${wantsDarkScreen ? "შავი ეკრანი, " : ""}${wantsLargeText ? "დიდი ტექსტი, " : ""}${wantsLongText ? "გრძელი ტექსტი" : ""}.</p>
            <p>გთხოვთ, გააგრძელოთ საიტის დათვალიერება.</p>
        `;