// davaleba 1
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}


import { add, multiply } from './math.js';
console.log(add(2, 3));      // 5
console.log(multiply(3, 4)); // 12


// davaleba 2
export default function formatDate(date) {
  return date.toISOString().split('T')[0];
}
export function parseDate(str) {
  return new Date(str);
}


import formatDate, { parseDate } from './utils.js';
const today = new Date();
console.log(formatDate(today)); // მაგ: "2025-10-11"
const d = parseDate('2025-01-01');
console.log(d.getFullYear());   // 2025





// davaleba 3
let count = 0;
export function inc() {
  count++;
}
export function get() {
  return count;
}


import { inc } from './counter.js';
export function runA() {
  inc();
  inc();
}
import { inc } from './counter.js';
export function runB() {
  inc();
}


import { get } from './counter.js';
import { runA } from './a.js';
import { runB } from './b.js';
runA();
runB();
console.log(get()); // 3 — count არის გაზიარებული (shared module cache)




// davaleba 4
export function createLogger({ level = 'info', prefix = '' } = {}) {
  const levels = ['info', 'warn', 'error'];
  const currentIndex = levels.indexOf(level);
  function logAt(lvl, ...args) {
    const idx = levels.indexOf(lvl);
    if (idx >= currentIndex) {
      console.log(prefix, `[${lvl.toUpperCase()}]`, ...args);
    }
  }
  return {
    info: (...a) => logAt('info', ...a),
    warn: (...a) => logAt('warn', ...a),
    error: (...a) => logAt('error', ...a),
  };
}


import { createLogger } from './logger.js';
const logger = createLogger({ level: 'warn', prefix: '[APP]' });
logger.info('info msg');   // არ ჩანს
logger.warn('warn msg');   // ჩანს
logger.error('error msg'); // ჩანს




// davaleba 5
function greetDecl(name) {
  console.log(`Hello, ${name} (declaration)`);
}
const greetExpr = function(name) {
  console.log(`Hello, ${name} (expression)`);
};
greetDecl('Lasha');
greetExpr('Lasha');




// davaleba 6
const person = {
  name: 'Lasha',
  say1: function() {
    console.log('say1:', this.name); // "Lasha"
  },
  say2: () => {
    console.log('say2:', this.name); // undefined (arrow-ს არ აქვს საკუთარი this)
  }
};
person.say1();
person.say2();




// davaleba 7
function mapWith(fn, arr) {
  const result = [];
  for (let item of arr) result.push(fn(item));
  return result;
}
function filterWith(fn, arr) {
  const result = [];
  for (let item of arr) if (fn(item)) result.push(item);
  return result;
}
function reduceWith(fn, arr, init) {
  let acc = init;
  for (let item of arr) acc = fn(acc, item);
  return acc;
}
// შემოწმება
console.log(mapWith(x => x * 2, [1, 2, 3])); // [2, 4, 6]



// davaleba 8
function makeCounter(start = 0) {
  let count = start;
  return {
    inc: () => count++,
    dec: () => count--,
    get: () => count
  };
}
const c1 = makeCounter(0);
const c2 = makeCounter(10);
c1.inc();
c2.inc();
console.log(c1.get()); // 1
console.log(c2.get()); // 11 (დამოუკიდებელი)




// davaleba 9
function intro(age) {
  console.log(this.name, age);
}

const prson = { name: 'Lasha' };

intro.call(prson, 25);    // Lasha 25
intro.apply(prson, [30]); // Lasha 30

const boundIntro = intro.bind(prson);
boundIntro(35);  // Lasha 35
