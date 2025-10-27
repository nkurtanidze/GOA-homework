// 1)
function sumEvenOdd(numbers) {
    let result = { evenSum: 0, oddSum: 0 };
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.evenSum += num;
        } else {
            result.oddSum += num;
        }
    }
    return result;
}


// 2)
function uniqueWordsCount(str) {
    let words = str.toLowerCase().split(/\s+/); // ტექსტის გაყოფა სიტყვებზე
    let uniqueWords = new Set(words); // უნიკალური სიტყვები
    return uniqueWords.size;
}


// 3)
function longestWord(str) {
    let words = str.split(/\s+/);
    let maxWord = "";
    for (let word of words) {
        if (word.length > maxWord.length) {
            maxWord = word;
        }
    }
    return maxWord;
}


// 4)
function differenceArray(arr1, arr2) {
    return arr1.filter(el => !arr2.includes(el));
}


// 5)
function isPalindrome(str) {
    let normalized = str.replace(/\s+/g, "").toLowerCase();
    return normalized === normalized.split("").reverse().join("");
}