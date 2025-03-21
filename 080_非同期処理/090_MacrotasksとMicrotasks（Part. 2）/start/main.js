new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });

}).then(function job1() {
  console.log('job1');

  setTimeout(function task1() {
    console.log('task2');

    queueMicrotask(function job4(){
      console.log("job4");
    })

    const p = Promise.resolve();
    p.then(function job5(){
      console.log("job5");
    })
  });

  // queueMicrotask(function job4(){
  //   console.log("job4");
  // })

})
.then(function job1() {
  console.log('job2');
})
.then(function job1() {
  console.log('job3');
})

console.log('global end');