// 使用await实现指定时间间隔执行程序
function timer(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    })
}
  // 用法
  async function one2FiveInAsync() {
    for(let i = 1; i <= 5; i++) {
      console.log(i);
      await timer(1000);
    }
  }
  
  one2FiveInAsync();