// 如果await后的Promise状态变为reject，则reject的参数会被catch方法的回调函数接收到
async function f1() {
  await Promise.reject("出错了");
}
f1()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));


