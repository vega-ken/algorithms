// intersect arrays of objects by property (example with id)

let arrays = [
  [
    { id: "1", name: "gian" },
    { id: "2", name: "jaf" },
    { id: "3", name: "eli" }
  ],
  [
    { id: "3", name: "eli" },
    { id: "1", name: "gian" },
    { id: "2", name: "jaf" }
  ],
  [
    { id: "1", name: "gian" },
    { id: "4", name: "ken" },
    { id: "3", name: "eli" }
  ]
];

// should return [{ id: "1", name: "gian" }, {id: "3", name: "eli"}]

console.log("arrays: ", arrays);
console.log("intersection: ", intersection(arrays));

function intersection(arrays) {
  // vamos a iterar cada objeto, si el objeto esta en todos los arrays, deberiamos pushearlo a la respuesta,
  // si el objeto ya esta en la respuesta, deberiamos obviarlo

  let res = [];
  let count = 0;

  arrays.forEach(arr => {
    arr.forEach(obj => {
      if (!isCurrentObjectAlreadyInRes(res, obj.id)) {
        if (isCurrentObjectOnEveryArray(arrays, obj.id)) {
          res.push(obj);
        }
      }
    });
  });

  return res;
}

function isCurrentObjectAlreadyInRes(res, id) {
  let response = false;

  res.forEach(obj => {
    if (obj.id === id) {
      response = true;
    }
  });
  return response;
}

function isCurrentObjectOnEveryArray(arrays, id) {
  let count = 0;

  arrays.forEach(arr => {
    arr.forEach(obj => {
      if (obj.id === id) count++; // should call 'break' when this happens
    });
  });

  if (count === arrays.length) return true;
  else return false;
}
