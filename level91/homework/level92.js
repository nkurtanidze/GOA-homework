// davaleba 1
const colors = [
    "#e74c3c", "#8e44ad", "#3498db", "#1abc9c", "#27ae60",
    "#f1c40f", "#e67e22", "#d35400", "#2c3e50", "#7f8c8d"
  ];

  const wrapper = document.getElementById("wrapper");

  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.className = "container";
    div.style.backgroundColor = colors[i % colors.length];
    div.innerText = `Container ${i + 1}`;

    if (i % 2 === 0) {
      // ჩასმა wrapper-ის თავში
      wrapper.insertBefore(div, wrapper.firstChild);
    } else {
      // ჩასმა wrapper-ის ბოლოში
      wrapper.appendChild(div);
    }
  }




// davaleba 2
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    taskList.insertBefore(newTask, taskList.firstChild); // ამატებს თავში

    input.value = "";
  }





// davaleba 4
function addSquare() {
  const number = document.getElementById('numberInput').value;
  if (!number) return;

  const lastDigit = parseInt(number.toString().slice(-1));
  const colorMap = {
    1: 'red',
    2: 'green',
    3: 'blue',
    4: 'orange',
    5: 'purple',
    6: 'pink',
    7: 'brown',
    8: 'gray',
    9: 'cyan',
    0: 'black'
  };

  const color = colorMap[lastDigit] || 'black';

  const square = document.createElement('div');
  square.className = 'square';
  square.style.backgroundColor = color;

  document.getElementById('container').appendChild(square);
}



// davaleba 5
function addShape() {
  const container = document.getElementById('container');
  const value = parseInt(document.getElementById('numberInput').value);
  
  if (isNaN(value)) {
    alert("გთხოვ შეიყვანე რიცხვი");
    return;
  }

  const shape = document.createElement('div');

  if (value % 2 === 0) {
    shape.className = 'blue-circle';
    container.appendChild(shape); // ბოლოში დაამატე
  } else {
    shape.className = 'red-square';
    container.insertBefore(shape, container.firstChild); // თავში დაამატე
  }
}