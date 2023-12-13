// 现在，我们有多种方法处理异步操作，第一种是采用回调函数，但如果嵌套函数太多，会产生回调地狱的问题，且每个任务形成强耦合，不利于代码维护
function step1(value1, callback) {
  setTimeout(function () {
    let value2 = value1 + 1;
    callback(value2);
  }, 1000);
}
function step2(value2, callback) {
  setTimeout(function () {
    let value3 = value2 * 2;
    callback(value3);
  }, 1000);
}
function step3(value3, callback) {
  setTimeout(function () {
    let value4 = value3 - 3;
    callback(value4);
  }, 1000);
}
function step4(value4, callback) {
  setTimeout(function () {
    let result = value4 / 4;
    callback(result);
  }, 1000);
}
step1(1, function (value1) {
  step2(value1, function (value2) {
    step3(value2, function (value3) {
      step4(value3, function (value4) {
        console.log("The final result is " + value4);
      });
    });
  });
});

// 第二种方法是使用Promise.then()链式调用，这种方法加入了大量Promise语法
function step1(value1) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value2 = value1 + 1;
      resolve(value2);
    });
  });
}
function step2(value2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value3 = value2 * 2;
      resolve(value3);
    }, 1000);
  });
}
function step3(value3) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value4 = value3 - 3;
      resolve(value4);
    }, 1000);
  });
}
function step4(value4) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = value4 / 4;
      resolve(result);
    }, 1000);
  });
}

step1(1)
  .then(step2)
  .then(step3)
  .then(step4)
  .then(
    (res) => {
      console.log("The final result is " + res);
    },
    (err) => {
      console.err(err);
    }
  );

// 第三种方法是使用Generator函数，并在每次执行.next()时传入上一步的返回结果，但是以下这种写法只适合同步操作
function step1(value1) {
  let value2 = value1 + 1;
  return value2;
}
function step2(value2) {
  let value3 = value2 * 2;
  return value3;
}
function step3(value3) {
  let value4 = value3 - 3;
  return value4;
}
function step4(value4) {
  let result = value4 / 4;
  return result;
}

function* runningTask(value1) {
  try {
    var value2 = yield step1(value1); // 使用 await 关键字来等待 Promise 的结果
    var value3 = yield step2(value2);
    var value4 = yield step3(value3);
    var result = yield step4(value4);
    console.log("The final result is " + result);
  } catch (e) {
    console.error(e);
  }
}

const iterator = runningTask(1);
let value = iterator.next().value;
console.log(value);
while (value !== undefined) {
  value = iterator.next(value).value;
  console.log(value);
}

// 异步函数的写法
function step1(value1) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value2 = value1 + 1;
      resolve(value2);
    });
  });
}
function step2(value2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value3 = value2 * 2;
      resolve(value3);
    }, 1000);
  });
}
function step3(value3) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value4 = value3 - 3;
      resolve(value4);
    }, 1000);
  });
}
function step4(value4) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = value4 / 4;
      resolve(result);
    }, 1000);
  });
}

async function* runningTask(value1){
  try{
    var value2 = await step1(value1); 
    yield value2; 
    var value3 = await step2(value2);
    yield value3;
    var value4 = await step3(value3);
    yield value4;
    var result = await step4(value4);
    console.log("The final result is " + result);
  }catch(e){
    console.error(e);
  }
}
(async function() { 
  const iterator = runningTask(1); 
  for await (const value of iterator) {
    console.log(value);
  }
})(); 
