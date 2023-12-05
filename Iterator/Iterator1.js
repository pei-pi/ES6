// Iterator对象具有一个next，每次调用实例的next方法，就会指向数据结构的下一个成员
// 每次返回的对象包含两个属性：
// ----value：表示当前成员的值
// ----done：表示遍历是否结束
// 以下是一个模拟遍历器借口的例子
function sampleIterator(i){
    let index = 0;
    return {
        next:function(){
            if(index<i.length){
                return {value: i[index++], done: false} 
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
// sampleIterator返回一个可迭代对象，具有next方法，next方法内部通过闭包保存index的值，每次调用都会加1
const sample = sampleIterator(['a','b','c']);
console.log(sample.next())
console.log(sample.next())
console.log(sample.next())
console.log(sample.next())