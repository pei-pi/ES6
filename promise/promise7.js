// 当我们使用Promise.all()时，只要有一个实例状态变为rejected，就会立即返回。
// Promise.allSettled()会等待所有实例都变为fulfilled或rejected时，再进行下一步操作
// Promise.allSettled()的状态只会变为fulfilled，回调函数会受到一个数组作为参数，数组成员对应每个实例对象，有以下两种情况：
// ----1.异步操作成功：{status:'fulfilled',value:value}
// ----2.异步操作失败：{status:'rejected',reason:reason}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve one");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject two");
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve three");
  }, 3000);
});

Promise.allSettled([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});
