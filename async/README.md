### 含义
ES2017标准引入了async函数，使异步操作变得更方便，简单来说，它是Generator函数的语法糖。
- 相对于Generator函数来说，我们每次执行下一步操作时都要靠执行器或者手动调用next()执行，而async函数具有内置执行器，等待await后的异步函数执行完毕后才会执行下一句。
- Generator函数返回值是Iterator对象，async函数的返回值是Promise对象，可以使用then方法指定下一步操作。
- async函数返回一个Promise对象，async函数内部的return语句返回值会成为then方法回调函数的参数，async函数内部抛出的错误会导致Promise状态变为reject，被catch捕获。
[async1.js](./async1.js) —— async函数的基本使用  
[async2.js](./async2.js) —— async的多种使用形式  
[async3.js](./async3.js) —— async返回的Promise对象的状态变化  
[async4.js](./async4.js) —— 使用await实现休眠效果  
[async5.js](./async5.js) —— await错误处理