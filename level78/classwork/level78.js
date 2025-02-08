function getMatrixRowLengths(matrix) {
    return matrix.map(row => row.length);
}

const matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(getMatrixRowLengths(matrix)); // [3, 2, 4]