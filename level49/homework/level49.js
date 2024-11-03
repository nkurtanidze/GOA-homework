// davaleba 1
function positions(row, col) {
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        console.log(`row: ${i} col: ${j}`);
      }
    }
}
 

// davaleba 2
function multiplication() {
    const table = [];
    
    for (let i = 1; i <= 10; i++) {
      const row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    
    return table;
  }
  
  console.log(multiplication());


// davaleva 3
function pairs(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j > i) {
          console.log(`(${i}, ${j})`);
        }
      }
    }
  }
  