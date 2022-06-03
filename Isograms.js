// An isogram is a word that has no repeating letters, consecutive or non-consecutive

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

console.log(isIsogram("sdfgh"));
