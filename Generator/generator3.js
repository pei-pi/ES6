// Generator函数返回Iterator对象，所以可以用for...of进行遍历
function* foo(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
for(var i of foo()){
    console.log(i)
}

// 通过Generator函数，可以给原生对象添加Iterator接口，就能使用for...of遍历
function* objectEntried(obj){
    let propKeys = Reflect.ownKeys(obj);
    for(let propKey of propKeys){
        yield [propKey,obj[propKey]];
    }
}
var joey = {first:'joey',last:'trabiany'}

for(let [key,value] of objectEntried(joey)){
    console.log(`${key}:${value}`);
}