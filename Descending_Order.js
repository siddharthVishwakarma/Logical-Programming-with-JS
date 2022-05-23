// Sort number in decending order

function descendingOrder(...n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}

console.log(descendingOrder([41459786]));
