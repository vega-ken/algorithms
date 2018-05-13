// intersect arrays of numbers
const arrays = [[1, 2, 3, 4], [4, 5, 6, 2], [2, 3, 4]];
// you should return [2,4]

console.log("arrays: ", arrays);
console.log("intersection: ", intersection(arrays));

function intersection(arrays) {
  let result = [];

  arrays.forEach(list => {
    list.forEach(element => {
      if (result.indexOf(element) === -1) {
        if (arrays.filter(list => list.indexOf(element) === -1).length === 0)
          result.push(element);
      }
    });
  });

  return result;
}
