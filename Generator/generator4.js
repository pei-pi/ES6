// Generator返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，错误会优先在Generator函数体内捕获，如果函数体内catch语句执行完还有错误，则会被函数体外的catch语句捕获.
function* gen1(){
    try{
        yield 1;
    }catch(e){
        console.error("内部捕获:" + e);
    }
    yield 2;
}
var g1 = gen1();
g1.next();
try{
    g1.throw('error1');
    g1.throw('error2');
}catch(e){
    console.error('外部捕获:' + e);
}
// 遍历器对象的throw方法要被内部捕获，前提是至少执行过一次next方法，否则只可能抛出在函数外部，因为执行一次next方法等同于启动执行Generator函数的内部代码。
function* gen2(){
    try{
        yield 1;
    }catch(e){
        console.error("内部捕获:" + e);
    }
    yield 2;
}
var g2 = gen2(); 
g2.next();    //如果不写这句会报错
g2.throw('error');

// 只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历。
// g.throw方法被内部捕获后，等同于执行了一次next方法
function* gen3(){
    try{
        yield 1;
    }catch(e){
        console.error("内部捕获:" + e);
        yield 2;
    }
    yield 3;
}
var g3 = gen3();
console.log(g3.next())
console.log(g3.throw('error'))
console.log(g3.next())
console.log(g3.next())


// 如果Generator函数执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果后续还调用next方法，会返回一个{value:undefined,done:true}的对象，JS引擎认为这个Generator已经运行结束了
function* g4() {
  yield 1;
  console.log("throwing an exception");
  throw new Error("generator broke!");
  yield 2;
  yield 3;
}
function log(generator) {
  var v;
  console.log("starting generator");
  try {
    v = generator.next();
    console.log("第一次运行next方法", v);
  } catch (err) {
    console.log("第一次运行捕捉错误", v);
  }
  try {
    v = generator.next();
    console.log("第二次运行next方法", v);
  } catch (err) {
    console.log("第二次运行捕捉错误", v);
  }
  try {
    v = generator.next();
    console.log("第三次运行next方法", v);
  } catch (err) {
    console.log("第三次运行捕捉错误", v);
  }
  console.log("caller done");
}
log(g4());
