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
  
  async function* runningTask(value1){
    try{
      var value2 = await step1(value1); 
      yield value2; 
      var value3 = await step2(value2);
      yield value3;
      var value4 = await step3(value3);
      yield value4;
      var result = await step4(value4);
      console.log("The final result is " + result);
    }catch(e){
      console.error(e);
    }
  }
  (async function() { 
    const iterator = runningTask(1); 
    for await (const value of iterator) {
      console.log(value);
    }
  })(); 
  