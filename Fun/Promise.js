function step1(value1) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value2 = value1 + 1;
      resolve(value2);
    });
  });
}
function step2(value2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value3 = value2 * 2;
      resolve(value3);
    }, 1000);
  });
}
function step3(value3) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let value4 = value3 - 3;
      resolve(value4);
    }, 1000);
  });
}
function step4(value4) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = value4 / 4;
      resolve(result);
    }, 1000);
  });
}

step1(1)
  .then(step2)
  .then(step3)
  .then(step4)
  .then(
    (res) => {
      console.log("The final result is " + res);
    },
    (err) => {
      console.err(err);
    }
  );