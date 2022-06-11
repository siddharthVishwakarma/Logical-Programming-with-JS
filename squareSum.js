// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(num) {
  let a = num.map((n) => {
    return Math.pow(n, 2);
  });

  let b = a.reduce(function (firstNum, secondNum) {
    return firstNum + secondNum;
  }, 0);

  return b;
}

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// By using foreach
function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}

console.log(squareSum([1, 2, 2]));
