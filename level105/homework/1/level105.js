// ========== Capturing Examples ==========
    // Example 1
    document.getElementById("cap1-outer").addEventListener("click", () => {
      console.log("Capturing 1: Outer");
    }, true);
    document.getElementById("cap1-middle").addEventListener("click", () => {
      console.log("Capturing 1: Middle");
    }, true);
    document.getElementById("cap1-inner").addEventListener("click", () => {
      console.log("Capturing 1: Inner");
    }, true);

    // Example 2
    document.getElementById("cap2-container").addEventListener("click", () => {
      console.log("Capturing 2: Container");
    }, true);
    document.getElementById("cap2-btn").addEventListener("click", () => {
      console.log("Capturing 2: Button Clicked");
    }, false);

    // Example 3
    document.getElementById("cap3-parent").addEventListener("click", () => {
      console.log("Capturing 3: Parent");
    }, true);
    document.getElementById("cap3-child").addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Capturing 3: Child");
    }, true);



// ========== Bubbling Examples ==========
    // Example 1
    document.getElementById("bub1-outer").addEventListener("click", () => {
      console.log("Bubbling 1: Outer");
    });
    document.getElementById("bub1-middle").addEventListener("click", () => {
      console.log("Bubbling 1: Middle");
    });
    document.getElementById("bub1-inner").addEventListener("click", () => {
      console.log("Bubbling 1: Inner");
    });

    // Example 2
    document.getElementById("bub2-list").addEventListener("click", () => {
      console.log("Bubbling 2: List");
    });
    document.getElementById("bub2-item").addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Bubbling 2: Item");
    });

    // Example 3
    document.getElementById("bub3-box").addEventListener("click", (e) => {
      console.log("Bubbling 3:");
      console.log("Target:", e.target.id);
      console.log("CurrentTarget:", e.currentTarget.id);
    });