// 数组
var arr = [1,2,3];
var iteratorArr = arr[Symbol.iterator]();
console.log("----------------数组------------------")
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());

// String
var str = 'abc'
var iteratorStr = str[Symbol.iterator]();
console.log("----------------字符串------------------")
console.log(iteratorStr.next());
console.log(iteratorStr.next());
console.log(iteratorStr.next());
console.log(iteratorStr.next());

// Map
var map = new Map();
map.set('a',1);
map.set('b',2);
var iteratorMap = map[Symbol.iterator]();
console.log("----------------map------------------")
console.log(iteratorMap.next());
console.log(iteratorMap.next());
console.log(iteratorMap.next());

// set
var set = new Set();
set.add('set1');
set.add('set2');
var iteratorSet = set[Symbol.iterator]();
console.log("----------------set------------------")
console.log(iteratorSet.next());
console.log(iteratorSet.next());
console.log(iteratorSet.next());

// arguments类数组对象
arg(1,2,3);
function arg(){
    console.log("----------------arguments------------------")
    var iteratorArg = arguments[Symbol.iterator]();
    console.log(iteratorArg.next());
    console.log(iteratorArg.next());
    console.log(iteratorArg.next());
    console.log(iteratorArg.next());
}

// 我们也可以直接查看原型上是否有Symbol.iterator属性
console.log(Set.prototype.hasOwnProperty(Symbol.iterator))
console.log(Array.prototype.hasOwnProperty(Symbol.iterator))
console.log(String.prototype.hasOwnProperty(Symbol.iterator))
console.log(Map.prototype.hasOwnProperty(Symbol.iterator))
