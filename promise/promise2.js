// 首先，我们来实现一个原生的ajax，后端接口使用JSONPlaceholder的API
// 由于XMLHttpRequest是浏览器api，所以需要将js嵌入html文档中才可以运行
const xhr = new XMLHttpRequest();
//使用open方法，指定请求的类型（GET）、URL和是否异步（true）
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.send();
//使用onreadystatechange事件，监听请求的状态变化
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Request was successful!", xhr.responseText);
  }
};

// 使用Promis实现ajax
const promise = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      }
    };
    xhr.onerror = () => {
      reject(new Error("Network error occurred"));
    };
    xhr.send();
  });
};

promise("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message);
  });
