// davaleba 1
function usersToMap(users) {
  const userMap = new Map();
  users.forEach(user => {
    userMap.set(user.name, user.age);
  });
  return userMap;
}
const users = [
  { name: 'ნიკა', age: 25 },
  { name: 'ანა', age: 30 },
  { name: 'ლევანი', age: 22 }
];
console.log(usersToMap(users));
// Map(3) { 'ნიკა' => 25, 'ანა' => 30, 'ლევანი' => 22 }


// davaleba 2
function getUniqueNumbers(numbers) {
  return [...new Set(numbers)];
}
const nums = [1, 2, 2, 3, 4, 3, 5];
console.log(getUniqueNumbers(nums));
// [1, 2, 3, 4, 5]


// davaleba 3
function wordFrequency(sentences) {
  const wordMap = new Map();

  sentences.forEach(sentence => {
    const words = sentence.split(/\s+/); // იყოფა სიტყვებად
    words.forEach(word => {
      const lowerWord = word.toLowerCase();
      const count = wordMap.get(lowerWord) || 0;
      wordMap.set(lowerWord, count + 1);
    });
  });

  return wordMap;
}
const sentences = [
  'ჩვენ გვიყვარს პროგრამირება',
  'პროგრამირება საინტერესოა',
  'ჩვენ ვსწავლობთ პროგრამირებას'
];
console.log(wordFrequency(sentences));
// Map(6) { 'ჩვენ' => 2, 'გვიყვარს' => 1, 'პროგრამირება' => 2, 'საინტერესოა' => 1, 'ვსწავლობთ' => 1, 'პროგრამირებას' => 1 }


// davaleba 4
function getUniqueIds(objects) {
  const idSet = new Set();
  objects.forEach(obj => idSet.add(obj.id));
  return idSet;
}
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 1, name: 'Duplicate ID' }
];
console.log(getUniqueIds(items));
// Set(2) { 1, 2 }


// davaleba 5
function commonWords(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = new Set();

  set1.forEach(word => {
    if (set2.has(word)) {
      result.add(word);
    }
  });

  return result;
}
const words1 = ['კოდი', 'ვებსაიტი', 'აპლიკაცია'];
const words2 = ['ვებსაიტი', 'აპლიკაცია', 'მონაცემები'];
console.log(commonWords(words1, words2));
// Set(2) { 'ვებსაიტი', 'აპლიკაცია' }
