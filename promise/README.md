## promise的含义
promise对象代表一个异步操作，有三种状态，分别是**pending（进行中）**、**fullfilled（已成功）**、**reject（已失败）**。  

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