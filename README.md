### 分析Promise

```
const p1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('promise')
})
console.log(2);

p1
.then(res => console.log(res, 3), err => console.log(err, 4))
.catch(err => console.log(err, 5))
.finally(res => console.log(res, 6))

Promise.all();
Promise.resolve();
```
Promise的执行流程

Promise的构造方法接收一个executor()，在new Promise()时就立刻执行这个executor回调

resolve 成功执行then，reject 失败 执行catch

最终执行 finally

Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
then方法接收两个可选参数，分别对应状态改变时触发的回调。then方法返回一个promise。then 方法可以被同一个 promise 调用多次。