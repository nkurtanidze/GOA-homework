// davaleba 1
function highlightChild() {
    const number = parseInt(document.getElementById('childNumber').value);
    const children = document.querySelectorAll('.child');

    children.forEach(child => child.classList.remove('highlight'));

    if (number >= 1 && number <= children.length) {
      children[number - 1].classList.add('highlight');
    } else {
      alert("Enter a number between 1 and " + children.length);
    }
  }




// davaleba 2
  const divs = document.querySelectorAll('.my-div');

  divs.forEach(div => {
    div.addEventListener('click', () => {
      if (div.hasChildNodes() && div.innerHTML.trim() !== '') {
        alert("This Div has child");
      } else {
        alert("This Div is empty");
      }
    });
  });




// davaleba 3
const container = document.getElementById('container');
const children = container.getElementsByClassName('child');

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];  // ფერები
for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = colors[i % colors.length];  // სხვადასხვა ფერი
}



// davaleba 5
function changeColor() {
  const container = document.getElementById('container');
  const firstParagraph = container.children[0];
  firstParagraph.style.color = 'red';
}