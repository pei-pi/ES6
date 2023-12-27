// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变
// 以下例子会等到所有await操作执行完，才执行then后面的语句。
function timer(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 1);
    }, 1000);
  });
}

async function add(val) {
  let value1 = await timer(val);
  let value2 = await timer(value1);
  return value2;
}

add(1).then((value)=>{
    console.log(value);
});
