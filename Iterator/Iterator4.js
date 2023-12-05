// Iterator除了必须的next方法外，还有两个可选的方法return和throw
// 如果for...of循环提前退出，则会自动调用return方法，return方法必须有返回值，且返回值必须是一个对象
var iteratorObj = {
    items:[1,2,3],
    [Symbol.iterator]:function(){
        var that = this;
        var i = 0;
        return{
            next(){
                return i<that.items.length?
                {value:that.items[i++],done:false}:
                {value:undefined,done:true}
            },
            return(){
                console.log("提前退出")
                return{
                    done:true
                }
            }
        }
    }
}
// 以下两种情况都会提前退出
for(var item of iteratorObj){
    console.log(item);
    if(item === 2) break;
}
for(var item of iteratorObj){
    console.log(item);
    throw new Error();
}