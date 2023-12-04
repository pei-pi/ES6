## promise的含义
promise对象代表一个异步操作，有三种状态，分别是**pending（进行中）**、**fulfilled（已成功）**、**reject（已失败）**。  

* promise无法取消，一旦创建就会立即执行
* resolve在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务
```js
new Promise((resolve,reject) => {
    resolve(1)
    console.log(2)
}).then(v => {
    console.log(v);
})
//2
//1
```

[promise1](./promise1.js) —— promise的基础实现  
[promise2](./promise2.js) —— 使用promise实现ajax  
[promise3](./promise3.js) —— then、catch  
[promise4](./promise4.js) —— finally()  
[promise5](./promise5.js) —— Promise.all()  
[promise6](./promise6.js) —— Promise.race()  
[promise7](./promise7.js) —— Promise.allSettled()


## 相关知识点总结
- .then方法有两个参数，第二个参数实际上与catch等价
- 不管Promise的结果为fulfilled还是rejected，finally方法都会执行，因此finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
- Promise.all()参数为一组具有Iterator接口的promise实例，返回的结果有三种情况：
    - 所有实例都为resoved，Promise.all()的状态为resolved，返回结果为所有实例返回结果的数组
    - 有至少一个实例为rejected，Promise.all()的状态为rejected，返回结果为第一个rejected实例的返回结果
    - 如果实例定义了自己的catch方法，rejected时会在实例内部执行，之后返回给Promise.all()的，也是resolved
- Promise.race()参数为一组具有Iterator接口的promise实例，只要有一个实例改变状态，Promise.race()的状态就会跟着改变，并返回该实例的返回值
- Promise.allSettled()参数为一组具有Iterator接口的promise实例,该方法会等到所有promise实例状态改变后，才返回结果，回调函数的收到的参数有两种情况
    - 异步操作成功：{status:'fulfilled',value:value}
    - 异步操作失败：{status:'rejected',reason:reason}