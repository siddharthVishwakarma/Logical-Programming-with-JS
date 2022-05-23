// Sort number in ascending order

function ascendingOrder(...n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .reverse()
      .join("")
  );
}

console.log(ascendingOrder([41459786]));
