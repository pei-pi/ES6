// Promise.all()方法接受一组具有Iterator接口的对象作为参数，且每个对象都是promise实例，他的状态有以下两种情况
// 1.所有实例的状态都变为fulfilled，Promise.all的状态也变为fulfilled，返回值为所有实例返回值组成的数组
// 2.如果有一个实例状态为rejected，Promise.all的状态变成rejected,返回值为第一个reject的实例的返回值
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  // resolve('Promise 3 resolved')
  reject("Promise 3 rejected");
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

// 有一种另外的情况，如果rejected的实例对象有自己的catch方法，执行到该实例后，错误会被自己捕获，该实例执行完catch方法后，也变成resolveed,导致Promise.all()最终会变为resolved，不会执行catch()
const promise4 = new Promise((resolve, reject) => {
    resolve("Promise 4 resolved");
  });
  
  const promise5 = new Promise((resolve, reject) => {
    resolve("Promise 5 resolved");
  });
  
  const promise6 = new Promise((resolve, reject) => {
    reject("Promise 6 rejected");
  }).catch(err => {
    console.error("catch by Promise6:"+err);
  })
  
  Promise.all([promise4, promise5, promise6])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });