function step1(value1, callback) {
  setTimeout(function () {
    let value2 = value1 + 1;
    callback(value2);
  }, 1000);
}
function step2(value2, callback) {
  setTimeout(function () {
    let value3 = value2 * 2;
    callback(value3);
  }, 1000);
}
function step3(value3, callback) {
  setTimeout(function () {
    let value4 = value3 - 3;
    callback(value4);
  }, 1000);
}
function step4(value4, callback) {
  setTimeout(function () {
    let result = value4 / 4;
    callback(result);
  }, 1000);
}
step1(1, function (value1) {
  step2(value1, function (value2) {
    step3(value2, function (value3) {
      step4(value3, function (value4) {
        console.log("The final result is " + value4);
      });
    });
  });
});