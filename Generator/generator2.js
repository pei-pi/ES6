function* foo(x) {
  var y = 2 * (yield x + 1); //yield表达式如果用在另一个表达式之中，必须放在原括号里
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
console.log(a.next())  //{ value: 6, done: false }
console.log(a.next())  //{ value: NaN, done: false }
console.log(a.next())  //{ value: NaN, done: true }

var b = foo(5);
console.log(b.next())    //{ value: 6, done: false }
console.log(b.next(12))  //{ value: 8, done: false }
console.log(b.next(13))  //{ value: 42, done: true }

// 可以看到第二个例子会把我们传进去的参数作为上一个yield表达式的返回值（并不是yield所在的整个表达式）