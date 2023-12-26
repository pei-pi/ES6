### 含义
ES2017标准引入了async函数，使异步操作变得更方便，简单来说，它是Generator函数的语法糖。
- 相对于Generator函数来说，我们每次执行下一步操作时都要靠执行器或者手动调用next()执行，而async函数具有内置执行器，等待await执行完毕后才会执行下一句。
- Generator函数返回值是Iterator对象，async函数的返回值是Promise对象，可以使用then方法指定下一步操作。
[async1.js](./async1.js) —— async函数的基本使用  