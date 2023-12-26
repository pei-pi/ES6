现在，我们有多种方法处理多步操作:
- 第一种是采用回调函数，但如果嵌套函数太多，会产生回调地狱的问题，且每个任务形成强耦合，不利于代码维护。
- 第二种方法是使用Promise.then()链式调用。
- 第三种方法是使用Generator函数，并在每次执行.next()时传入上一步的返回结果。这种方法适用于同步的写法。
- 使用async,await语法糖将Generator改写成异步函数的写法  
[recall.js](./recall.js) —— 回调函数  
[Promise.js](./Promise.js) —— Promise函数  
[Generator.js](./Generator.js) —— Generator函数  
[Async.js](./Async.js) —— async、await