## 什么是Generator
我们已知的解决异步的手段有：
- 回调函数
- promise  
Generator函数是ES6提供的一种异步编程解决方案，它类似一个状态机，封装多个内部状态，执行Generator函数会返回一个遍历器对象，可以一次遍历Generator函数内部的每一个状态。有两个特征：
- function关键字与函数名之间有一个*号
- 函数体内部用yield表达式，定义不同的内部状态

## 知识点总结
- Generator函数会返回一个遍历器对象，即具有Symbol.iterator属性，并返回给自己
  ```js
  function* gen(){}
  var g = gen();
  g[Symbol.iterator]() === g
  //true
  ```
- yield表达式是暂停标志，每次运行next方法，就会执行到下一个yield之前结束，且yield后的表达式是惰性求值，另外，yield表达式只能用在Generator函数里。
- 如果Generator函数内部没有try...catch代码块，那遍历器对象的throw方法抛出的错误会被外部的try...catch捕获。相反，全局的throw命令只能被函数体外的catch语句捕获,如果Generator内部和外部都没有try...catch代码块，那程序会报错，直接中断执行


## 代码链接
[generator1.js](../Generator/generator1.js) —— Generator的使用  
[generator2.js](../Generator/generator2.js) —— next方法的参数  
[generator3.js](../Generator/generator3.js) —— Generator和for...of循环  
[generator4.js](../Generator/generator4.js) —— Generator.prototype.throw()