// Generator函数调用方法和普通函数一样，不同的是，调用Generator函数时，函数不会立即执行
// 需要调用next方法，每次指向下一个状态，可以发现返回结果与Iterator的形式相同
// 每个Generator()可以有多个yield语句，返回不同的状态，但是只能有一个return，返回最终状态，没有return时value值会返回undefined
function* aGenerator(){
    yield 'happy';
    yield 'birthday';
    return 'bro!';
}
var g = aGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());