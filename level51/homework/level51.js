// davaleba 1
function addMatrices(matrix1, matrix2) {ს
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }

    return result;
}

console.log(addMatrices(matrix1, matrix2));




// davaleba 2
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let i = 0; i < cols; i++) {
        transposed[i] = [];
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }

    return transposed;
}

const Matrix = transposeMatrix(matrix);
console.log(transposedMatrix);



// davaleba 3
function diagonalSums(matrix) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i];ი
        secondarySum += matrix[i][n - 1 - i];
    }

    return [primarySum, secondarySum];
}
console.log(diagonalSums(matrix));





// davaleba 5
function RowAndColumnSums(matrix) {
    const rowSums = [];
    const colSums = Array(matrix.length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
            colSums[j] += matrix[i][j];
        }
        rowSums.push(rowSum);
    }

    return { rowSums, colSums };
}
const result = RowAndColumnSums(matrix);
console.log("Row Sums:", result.rowSums); // [6, 15, 24]
console.log("Column Sums:", result.colSums); // [12, 15, 18]
