function step1(value1) {
  let value2 = value1 + 1;
  return value2;
}
function step2(value2) {
  let value3 = value2 * 2;
  return value3;
}
function step3(value3) {
  let value4 = value3 - 3;
  return value4;
}
function step4(value4) {
  let result = value4 / 4;
  return result;
}

function* runningTask(value1) {
  try {
    var value2 = yield step1(value1); // 使用 await 关键字来等待 Promise 的结果
    var value3 = yield step2(value2);
    var value4 = yield step3(value3);
    var result = yield step4(value4);
    console.log("The final result is " + result);
  } catch (e) {
    console.error(e);
  }
}

const iterator = runningTask(1);
let value = iterator.next().value;
console.log(value);
while (value !== undefined) {
  value = iterator.next(value).value;
  console.log(value);
}