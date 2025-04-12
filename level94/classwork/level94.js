// davaleba 4
function printChildTexts(element) {
    // ვამოწმებთ, ჰყავს თუ არა ელემენტს შვილები
    if (element.children && element.children.length > 0) {
      // თითოეული შვილი ელემენტის ტექსტის დაბეჭდვა
      for (let i = 0; i < element.children.length; i++) {
        let child = element.children[i];
        console.log(child.innerText || child.textContent);
      }
    } else {
      console.log("There is no text!");
    }
  }
  