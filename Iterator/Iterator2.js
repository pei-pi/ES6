// 普通对象是不能被for...of遍历的，可以在对象上部署Symbol.iterator属性，使其变为可迭代对象
// var obj = {
//     items:[1,2,3]
// }
// for(var k of obj){
//     console.log(k)
// }   这样直接使用会报错
var iterableObj = {
    items:[1,2,3],
    [Symbol.iterator]:function(){
        var self = this;
        var i = 0;
        return{
            next:function(){
                return i<self.items.length?
                {value:self.items[i++],done:false}:
                {value:undefined,done:true}
            }
        }
    }
}
for(var item of iterableObj){
    console.log(item);
}