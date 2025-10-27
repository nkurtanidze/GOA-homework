function reverseWords(str) {
  if (!str.includes(" ")) {
    return str;
  }
  const [first, ...rest] = str.split(" ");
  return reverseWords(rest.join(" ")) + " " + first;
}