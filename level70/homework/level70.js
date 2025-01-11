// davaleba 1
function create2DArray(rows, columns) {
    const result = [];
    let num = 1;

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(num++);
        }
        result.push(row);
    }

    return result;
}
console.log(create2DArray(2, 2)); // [ [1, 2], [3, 4] ]
console.log(create2DArray(3, 3)); // [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]



// davaleba 2
function processMatrix(matrix) {
    const n = matrix.length;

    // 1. Print Columns
    console.log("Columns:");
    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        console.log(`Column ${col + 1}:`, column);
    }

    // 2. Print Rows
    console.log("\nRows:");
    for (let row = 0; row < n; row++) {
        console.log(`Row ${row + 1}:`, matrix[row]);
    }

    // 3. Print Diagonals
    console.log("\nDiagonals:");
    const mainDiagonal = [];
    const secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]); // Main diagonal
        secondaryDiagonal.push(matrix[i][n - i - 1]); // Secondary diagonal
    }
    console.log("Main Diagonal:", mainDiagonal);
    console.log("Secondary Diagonal:", secondaryDiagonal);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
processMatrix(matrix);
