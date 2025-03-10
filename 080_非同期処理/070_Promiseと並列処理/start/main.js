function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (data) {
//   console.log(data);
// });

sleep(0)
  .then(function (val) {
    return Promise.race([sleep(2), sleep(6), sleep(7)]);
  })
  .then(function (val) {
    console.log("val1 " + val);
    return sleep(val);
  })
  .then(function (val) {
    console.log("val2 " + val);
    return sleep(val);
  });
