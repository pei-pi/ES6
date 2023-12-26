// await之后的语句都会等待异步函数执行完后再执行
function timeout(){
    return new Promise(resolve => {
        setTimeout(resolve,2000);
    })
}

async function asyncPrint(){
    console.log("async begin");
    await timeout().then(()=>{
        console.log("promise done");
    });
    console.log("async end");
}

asyncPrint();