let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 2];
let arr3 = [2, 3, 4];
// you should return [2,4]

let arrays = [];
arrays.push(arr1);
arrays.push(arr2);
arrays.push(arr3);

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