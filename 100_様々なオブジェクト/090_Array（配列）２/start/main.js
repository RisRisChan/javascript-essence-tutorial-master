const arry = [1, 2, 3, 4, 5];
arry.forEach((v, i, array) => {
  console.log(v, i, array);
});

const newArry = arry.map((v, i, array) => {
  return array;
});
console.log(newArry);

const filterArry = arry.filter((v, i, array) => {
  return v % 2 === 0;
});
console.log(filterArry);

const reduceArry = arry.reduce((acc, v, i, array) => {
  return acc + v;
}, 0);
console.log(reduceArry);
