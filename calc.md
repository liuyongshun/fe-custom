### calc

3  线性存储结构和非线性存储结构的区别？

线性：元素之间的关系是一对一的，如栈、队列。

非线性：每个元素可能连接0或多个元素，如树、图。


4  怎么计算空间复杂度？



常量空间 O(1)：存储空间大小固定，和输入规模没有直接的关系。



线性空间 O(n)：分配的空间是一个线性的集合，并且集合大小和输入规模n成正比。



二维空间 O(n^2)：分配的空间是一个二维数组集合，并且集合的长度和宽度都与输入规模n成正比。



递归空间 O(logn)：递归是一个比较特殊的场景。虽然递归代码中并没有显式的声明变量或集合，但是计算机在执行程序时，会专门分配一块内存空间，用来存储“方法调用栈”。执行递归操作所需要的内存空间和递归的深度成正比。


### 数据结构

常见数据结构： 数组、链表、哈希表、队列、栈、树、二叉树、二叉查找树、二叉堆、图

#### 数组

定义：

有限个相同类型的变量所组成的有序集合

时间复杂度：

增、删 O(n) 增删会导致位置和数组大小改变
改、查 O(1) 可以通过索引映射快速定位，与数组大小无关

#### 链表

定义：

链表是一种在物理上非连续、非顺序的数据结构














6  有哪些常见算法？

首先要明确：特定算法解决特定问题。


字符串：暴力匹配、BM、KMP、Trie等。

查找：二分查找、遍历查找等。

排序：冒泡排序、快排、计数排序、堆排序等。

搜索：TFIDF、PageRank等。

聚类分析：期望最大化、k-meanings、k-数位等。

深度学习：深度信念网络、深度卷积神经网络、生成式对抗等。

异常检测：k最近邻、局部异常因子等。

......

其中，字符串、查找、排序算法是最基础的算法。


五  常见排序算法

1  十大经典排序算法

2  冒泡排序

1）算法描述

一次比较两个元素，如果它们的顺序错误就把它们交换过来。越小的元素会经由交换慢慢“浮”到数列的顶端

2）实现步骤

比较相邻的元素。如果第一个比第二个大，就交换它们两个

对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数

针对所有的元素重复以上的步骤，除了最后一个

```
let arr = [4, 2, 5, 9, 0, 1, 9, 5, 2, 7, 8, 3]
let length = arr.length
for (let m = 0; m < length; m ++) {
  for (let n = 1; n < length - m; n ++) {
    if (arr[n-1] > arr[n]) {
      let temp = arr[n-1]
      arr[n-1] = arr[n]
      arr[n] = temp
    }
  }
}
```

**优缺点**

优点：实现和理解简单。

缺点：时间复杂度是O(n^2)，排序元素多时效率比较低。



let arr = [4,2,5,9,0,1, 9, 5,2,7, 8, 3]
let length = arr.length
for (let m = 0; m < length; m ++) {
  for (let n = 1; n < length - m; n ++) {
    if (arr[m] > arr[n]) {
      let temp = arr[m]
      arr[m] = arr[n]
      arr[n] = temp
    }
  }




let arr = [4, 2, 5, 9, 0, 1, 9, 5, 2, 7, 8, 3]
let length = arr.length
for (let m = 0; m < length; m ++) {
  for (let n = 1; n < length - m; n ++) {
    if (arr[n-1] > arr[n]) {
      let temp = arr[n-1]
      arr[n-1] = arr[n]
      arr[n] = temp
    }
  }
}
重复步骤1~3，直到排序完成。 
<!-- ============================= -->

```
var obj = {};
obj.__proto__ = Animal.prototype;
var result = Animal.call(obj,"cat");
return typeof result === 'object'? result : obj;
```

new关键字

- 创建一个新的空对象 {}

- 设置该对象原型指向构造函数

- 执行构造函数， 当this关键字被提及的时候，使用新创建的对象的属性。

- 返回新创建的对象











chrome调试：

https://toolbox.googleapps.com/apps/main/

HAR



charles

断点：


- 右键某个接口，选择breakpoint。

- 刷新页面从新调用接口，断点接口会一直处于pending状态。

- charles进入断点模式，右侧显示 overview 和 Edit Request。右侧底部显示Cancel 、 Abort、 Execute

- 点击Execute断点进入下一步，再次点击显示Edit Response

- 在 Edit Request 可以编辑请求信息， 在 Edit Response 可以编辑修改返回信息，方便调试接口参数


限速

在调试安卓或者ios手机时，有时候我们需要模拟弱网络环境，这个时候可以用charles的限速功能

- Proxy -> Throttle setting -> 勾选 Enable Throttle -> 勾选only for selected hosts -> 添加要限定的指定域名下的请求。

- 也可以自己预设一个网速，通过Add Preset 添加后，可以在Throttle Preset 里找到自己的预设并使用。

- 设置完后点击小乌龟图标 Start Throttle 开始限速，或者 Proxy -> Start Throttle 开始限速


**代理本地请求到dev或者test环境，甚至线上**

- charles 正常情况下时不会抓取 localhost 请求的，我们可以通过配置来实现

- window 下 `C:\Windows\System32\drivers\etc` 修改 hosts (可以拷贝一份到外面，改后后在替换，这样就可以提供管理员权限替换) `127.0.0.1 localhost.charlesproxy.com` 增加 本地到 `localhost.charlesproxy.com` 映射关系。

- 配置 tool -> Map Remote Settings , https的端口是443，通配符 * 可以匹配任意内容。

- 这样我们就可以通过请求 `http://localhost.charlesproxy.com:7001/cop-marketing-activity/api/v1/activity/page/campaign/info` 代理到 `https://dev-marketing-wap.svwsx.cn/cop-marketing-activity/api/v1/activity/page/campaign/info`