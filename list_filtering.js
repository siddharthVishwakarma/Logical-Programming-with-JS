// function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// let filter_list = (l) => {
//     return (result = l.filter((ele) => typeof ele === "number"));
//   };

let filter_list = (l) => {
  return l.filter(Number); //filter number will return string with number
};

function filter_li(l) {
  return l.filter(Number.isInteger);
}

console.log(filter_li([2, 3, "sid", false, 7, "2", "6", 0]));
