function arrayToObject(keys, values) {
    return keys.reduce((obj, key, index) => {
        obj[key] = values[index] !== undefined ? values[index] : null;
        return obj;
    }, {});
}

const keys = ["name", "age", "city"];
const values = ["John", 25, "New York"];

console.log(arrayToObject(keys, values));
// { name: 'John', age: 25, city: 'New York' }
