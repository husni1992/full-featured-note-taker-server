const fs = require("fs");

// const dataJson = fs.readFileSync("test.json").toString();
// const data = JSON.parse(dataJson);
// console.log(data);

// fs.writeFileSync("json-2.json", JSON.stringify({ foo: 1 }));

const readData = fs.readFileSync("test.json").toString();
const parsedReadData = JSON.parse(readData);

function changeData(data) {
  (data.name = "Husny the great"), (data.age = 29), (data.planet = "Earth");
  return data;
}

const newData = changeData(parsedReadData);
console.log(newData);

fs.writeFileSync("test.json", JSON.stringify(newData));
