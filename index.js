//1
let mass = [2, 4, 6];
mass[1] = 10;
console.log(mass);

//2
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

//3
let mass2 = [1, 2, 3, 4, 5];
total = 0;
for (let element of mass2) {
  total = total + element;
}
console.log(total);

//4
let mass3 = [1, 2, 3, 4, 5];
for (let element of mass3) {
  console.log(element);
}

//5
let mass4 = [0, 2, 4, 8, 10];
for (let element of mass4) {
  if (element > 5) {
    console.log(element);
  }
}

//6
let mass5 = [0, 2, 4, 8, 10, 12, 14, 16, 18, 20];
for (let element of mass5) {
  if (element > 19) {
    console.log(element);
  }
}

//7
let mass6 = [0, 2, 3, 6, 11, 14, 18, 19, 21];
for (let element of mass6) {
  if (element % 2 == 0) {
    console.log(element);
  }
}
