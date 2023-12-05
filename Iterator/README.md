## 遍历的方法
假如现在我们有一个数组
```js
var arr = ['红','橙','黄'];
```
我们想获取他的每一项数据，要怎么做？
```js
// for循环
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// forEach
arr.forEach(item => {
    console.log(item)
})
```
如果我现在有一个字符串，我想输出每一个字符，要怎么做？
```js
var str = '红橙黄绿青蓝紫';
// for...in
for(let s in str){
    console.log(str[s]);
}
// 数组方式
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}
// 转为数组
Array.prototype.slice.call(str);
```
那如果我有一个map或set对象，想输出每一项数据，毋庸置疑，用forEach就好啦
```js
var map = new Map();
map.set('zhang',12);
map.set('li',12);
map.set('wang',18);
map.forEach((val,key) => {
    console.log(val,key);
})
```
那有没有一种统一的方法，让我能遍历每种数据结构，但是又不用考虑每种数据结构的特性呢?
## Iterator（遍历器）的概念
Iterator提供统一的接口机制，用来处理不同的数据结构，即我们不用关心遍历对象内部的存储结构，任何数据结构只要部署Iterator接口，就可以完成遍历操作。可以理解为Iterator接口主要为for...of服务的。
## 代码链接
[Iterator1](../Iterator/Iterator1.js) —— Iterator的实现  
[Iterator2](../Iterator/Iterator2.js) —— Iterator与for...of  
[Iterator3](../Iterator/Iterator3.js) —— 原生具有Iterator接口的数据结构  
[Iterator4](../Iterator/Iterator4.js) —— return()方法，for...of中断

## 相关知识点总结
- ES6规定，只要在对象属性上部署了Iterator接口，具体形式为给对象添加Symbol.iterator属性，这个对象就是可迭代的，可以被for...of遍历。
- 有些数据结构原生具有Iterator接口，例如数组，类数组对象，map，set,String,以及使用querySelectAll()等方法获取的DOMList。
- 如果我们自己写遍历器对象生成函数，那next()方法时必须部署的，return()和throw()则可选，用来控制遍历器的中断。
- 对可迭代对象进行结构赋值时，会默认调用Symbol.iterator方法
- 扩展运算符(...)也会默认调用Symbol.iterator方法