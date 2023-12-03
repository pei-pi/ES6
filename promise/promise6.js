// Promise.race()的用法与Promise.all()的用法相同，不同的点是，只要有一个实例改变状态，则Promise.race()的状态就会跟着改变，并返回该实例的返回值
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Promise 1 resolved")},3000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Promise 2 resolved")},1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {reject("Promise 3 rejected")},2000);
  });
  
  Promise.race([promise1, promise2, promise3])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });