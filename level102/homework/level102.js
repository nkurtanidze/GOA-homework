// davaleba 1
// const parent = document.getElementById('parent');
//     const child = document.getElementById('child');

//     parent.addEventListener('click', function(event) {
//       console.log('დაკლიკდა მშობელზე (div)');
//     });

//     child.addEventListener('click', function(event) {
//       console.log('დაკლიკდა ღილაკზე (button)');
//     });




// davaleba 2
// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');

//     outer.addEventListener('click', function () {
//       console.log('Outer clicked');
//     });

//     middle.addEventListener('click', function () {
//       console.log('Middle clicked');
//     });

//     inner.addEventListener('click', function () {
//       console.log('Inner clicked');
//     });




// davaleba 3
document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("ღილაკი დაკლიკდა");
});
document.body.addEventListener("click", function(event) {
  console.log("body დაკლიკდა");
});



// davaleba 4
const paren = document.getElementById("parent");
    const chil = document.getElementById("child");

    parent.addEventListener("click", () => {
      console.log("დაკლიკდა მშობელი");
    });

    child.addEventListener("click", () => {
      console.log("დაკლიკდა შვილი");
    });



// davaleba 5
document.getElementById("outer").addEventListener("click", function () {
      console.log("Outer button clicked");
    });

    document.getElementById("middle").addEventListener("click", function () {
      console.log("Middle button clicked");
    });

    document.getElementById("inner").addEventListener("click", function () {
      console.log("Inner button clicked");
    });    



// davaleba 6
// const outer = document.getElementById("outer");
//     const inner = document.getElementById("inner");

//     outer.addEventListener("click", function () {
//       console.log("Outer DIV clicked (capturing)");
//     }, true); // capturing

//     inner.addEventListener("click", function () {
//       console.log("Inner DIV clicked (capturing)");
//     }, true); // capturing



// davaleba 7
const outerDiv = document.getElementById('outerDiv');
    const innerButton = document.getElementById('innerButton');

    // Capturing რეჟიმი outerDiv-ზე
    outerDiv.addEventListener('click', () => {
      console.log('Outer DIV clicked (capturing)');
    }, true); // capturing რეჟიმი

    // Bubbling რეჟიმი ღილაკზე
    innerButton.addEventListener('click', () => {
      console.log('Button clicked (bubbling)');
    }); // bubbling რეჟიმი (default)




// davaleba 8
const outer = document.querySelector('.outer');
  const middle = document.querySelector('.middle');
  const inner = document.querySelector('.inner');

  outer.addEventListener('click', () => {
    console.log('Outer clicked (capturing)');
  }, true); // true enables capturing

  middle.addEventListener('click', () => {
    console.log('Middle clicked (capturing)');
  }, true);

  inner.addEventListener('click', () => {
    console.log('Inner clicked (capturing)');
  }, true);



// davaleba 9
const btn = document.getElementById('myButton');

    // Capturing რეჟიმში დაყენება (true)
    btn.addEventListener('click', () => {
      console.log('Capturing click event');
    }, true);

    // Bubbling რეჟიმში დაყენება (false ან არჩეული არ არის)
    btn.addEventListener('click', () => {
      console.log('Bubbling click event');
    }, false);




// davaleba 10
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  // მშობელზე capturing ფაზით მოვლენა
  parent.addEventListener('click', function(event) {
    console.log('Parent capturing ფაზა');
  }, true);  // true = capturing ფაზა

  // ღილაკზე bubbling ფაზით მოვლენა
  child.addEventListener('click', function(event) {
    console.log('Child bubbling ფაზა');
  }, false);  // false = bubbling ფაზა