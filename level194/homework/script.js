// 1
// Big O Notation არის მეთოდი, რომელიც გვიჩვენებს, როგორ იზრდება
// ალგორითმის მუშაობის დრო ან მეხსიერების მოხმარება მონაცემების
// რაოდენობის (n) ზრდასთან ერთად.
// იგი გამოიყენება ალგორითმების ეფექტურობის შესაფასებლად და
// ერთმანეთთან შესადარებლად.



// 2
// O(1)
// O(log n)
// O(n)
// O(n log n)
// O(n²)



// 3
for(let i = 0; i < n; i++) {
    console.log(i);
}
// Big O: O(n)



// 4
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
// Big O: O(n²)



// 5
let i = 1;

while(i < n) {
    console.log(i);
    i *= 2;
}
// Big O: O(log n)



// 6
for(let i = 0; i < n; i++) {
    console.log(i);
}

for(let j = 0; j < n; j++) {
    console.log(j);
}
// O(n + n) = O(2n) = O(n)



// 7
for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
// Big O: O(n²)



// 8
function getFirstElement(arr) {
    return arr[0];
}
// Big O: O(1)




// 9

function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Big O: O(n)



// 10
function findLargest(arr) {
    let largest = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Big O: O(n)