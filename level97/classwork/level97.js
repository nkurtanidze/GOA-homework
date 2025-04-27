const input = document.getElementById('textInput');

let previousLength = 0;
let addedCount = 0;
let deletedCount = 0;

input.addEventListener('input', () => {
  const currentLength = input.value.length;

  if (currentLength > previousLength) {
    addedCount += currentLength - previousLength;
  } else if (currentLength < previousLength) {
    deletedCount += previousLength - currentLength;
  }

  previousLength = currentLength;

  console.clear();
  console.log(`დამატებული ასოები: ${addedCount}`);
  console.log(`წაშლილი ასოები: ${deletedCount}`);
});