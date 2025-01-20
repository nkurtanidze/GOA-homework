// მასივი ადამიანებით
let people = [
    {
        name: "თამარ",
        age: 25,
        height: 170,
        gender: "ქალი"
    },
    {
        name: "გიორგი",
        age: 30,
        height: 180,
        gender: "კაცი"
    },
    {
        name: "მარიამ",
        age: 28,
        height: 160,
        gender: "ქალი"
    },
    {
        name: "მიქელა",
        age: 35,
        height: 175,
        gender: "კაცი"
    }
];

// ფუნქცია, რომელიც ამოტვირთავს ადამიანის მონაცემებს
people.forEach(person => {
    console.log(`1) ადამიანი:
    სახელი: ${person.name},
    ასაკი: ${person.age},
    სიმაღლე: ${person.height},
    სქესი: ${person.gender}`);
});
