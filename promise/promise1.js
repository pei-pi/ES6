// 一个简单的promise例子，可以通过更改fullfill为true或false，来查看resolve和reject的效果
let fullfill = false;
function Timer(time){
    return new Promise((resolve,reject)=>{
        if(fullfill){
            setTimeout(resolve,time,{first:"hello",second:"world"})
        }else{
            reject(new Error("something wrong!"))
        }  
    })
}
 
Timer(1000).then(({first,second}) => {
    console.log(first+"---"+second)
}).catch((error)=>{
    console.log("Caught an error:", error.message);
})
