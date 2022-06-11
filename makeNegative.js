Clonvert;
function makeNegative(num) {
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegative(-9));
