// 2) ფუნქცია sayHello
function sayHello(name) {
    return `გამარჯობა, ${name}!`;
}

console.log(sayHello("ნიკა")); // მაგალითი გამოყენების

// 3) კალკულატორის ფუნქცია
function calculator(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b
    };
}

console.log(calculator(5, 3)); // { sum: 8, difference: 2, product: 15 }

// 4) ფუნქცია multiply
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(4));    // 8 (4*2)
console.log(multiply(4, 5)); // 20 (4*5)

// 5) names მასივი
let names = ["ნიკა", "თამარი", "გიორგი"];
console.log(names);

// 6) numbers მასივი
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));
