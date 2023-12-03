// then和catch是定义在Promise.prototype上的方法，为promise实例添加状态改变时的回调函数。
// then方法的第一个参数数resolved的回调函数，第二个参数是rejected的回调函数，都是可选的，但是我们一般不使用第二个参数，而是用catch来指定指定发生错误时的回调函数，理由是使用catch可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）
// 以下三种写法是等价的
const promise1 = new Promise((resolve,reject) => {
    throw new Error('error')
});
promise1.catch(err => {
    console.log(err.message)
})

const promise2 = new Promise((resolve,reject) => {
    throw new Error('error')
});
promise2.then(null,err => {
    console.log(err.message)
})

const promise3 = new Promise((resolve,reject) => {
    reject(new Error('error'))
});
promise3.catch(err => {
    console.log(err.message)
})


// 可以采用链式调用的方法，控制函数的执行顺序
const promise4 = new Promise((resolve,reject) => {
    setTimeout(()=>{resolve(1)},3000)
})
promise4.then(res => {
    console.log(res);
    return new Promise((resolve,reject) => {
        setTimeout(()=>{resolve(2)},1000)
    })
}).then((res)=>{
    console.log(res)
})