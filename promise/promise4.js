// 不管Promise对象最后的状态是fulfilled还是还是reject，finally()方法都会执行
const promise = new Promise((resolve,reject) => {
    resolve("test")
})
promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("done!")
})