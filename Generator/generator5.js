// 如果我们要在一个Generator函数内部调用另一个Generator函数，需要自己手动遍历
function* foo(){
    yield 'a';
    yield 'b';
}
function* gen(){
    yield 'c';
    for(let i of foo()){
        console.log.log(i)
    }
    yield 'd';
}
// 如果有多个函数嵌套，会很麻烦
// ES6提供了yield*表达式，用来在一个Generator里执行另一个Generator函数
function* foo1(){
    yield 'c';
    yield* gen();
    yield 'd';
}     //等同于上面的gen()

// yield命令如果不加*，会返回一个遍历器对象，加了*，返回遍历器对象的每个值
// 数组原生支持Iterator，因此可以使用yield表达式
function* arr1(){
    yield ['a','b','c'];
}
console.log(arr1().next())  //{ value: [ 'a', 'b', 'c' ], done: false }

function* arr2(){
    yield* ['a','b','c'];
}
console.log(arr2().next())  //{ value: 'a', done: false }
