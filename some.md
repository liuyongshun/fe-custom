- 面向对象语言的三大特征： 封装、继承、多态

- 各自特点：

封装： 是隐藏逻辑实现过程，只对外暴露属性和方法，提高安全性和复用性； 

继承： 建立对象之间的父子关系，使子对象拥有父级对象的属性和方法，提高复用性；

多态： 在同一个方法中，由于参数不同而导致执行效果各异，便于拓展；

- JS中函数继承主要继承的是函数名，不是函数体，函数本身是引用类型，通过构造方法生产新的对象时，只是指针的存储变动而不是函数体

- 所有字符串都是String的实例，数字都是Number的实例，字符串和数字本身没有方法，都是通过原型链分别找到了String和Number的方法

- 一段流畅的动画帧与帧之间间隔有什么要求:  多数情况下最高的绘制频率只能是每秒60帧，对应于显示器的60Hz，低于该频率，画面卡顿，高于该频率，耗费性能。因此采用的时间间隔就是1/60,也就是16.7ms



- 什么是BFC： 页面上的一个隔离的独立容器，不受外界干扰或干扰外界

- 如何触发BFC： 

float不为 none
overflow的值不为 visible
position 为 absolute 或 fixed
display的值为 inline-block 或 table-cell 或 table-caption 或 grid

BFC的渲染规则

BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界
计算BFC的高度时，浮动子元素也参与计算（即内部有浮动元素时也不会发生高度塌陷）
BFC的区域不会与float的元素区域重叠
BFC内部的元素会在垂直方向上放置
BFC内部两个相邻元素的margin会发生重叠

BFC的应用场景

清除浮动： 清除浮动，防止高度塌陷
避免某元素被浮动元素覆盖：BFC的区域不会与浮动元素的区域重叠
阻止外边距重叠：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠

### HTML

1、doctype的作用是什么

声明文档类型，告知浏览器用什么文档标准解析这个文档

怪异模式：浏览器使用自己的模式解析文档，不加doctype时默认为怪异模式
标准模式：浏览器以W3C的标准解析文档

HTML 5

`<!DOCTYPE html>`

HTML 4.01 Strict

包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

HTML 4.01 Transitional

这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

HTML 4.01 Frameset

这个 DTD 与 HTML 4.01 Transitional 相同，但是允许使用框架集内容。

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

2、存储

cookies： 兼容性好，大小4k
localStorage： 持久性存储，页面关闭不会被清除，以键值对的方式存储，chrome限制大小5M
sessionStorage： sessionStorage在选项卡被关闭时即清除，且不同选项卡之间的sessionStorage不互通，chrome限制大小5M

3、href 和 src

href 是 Hypertext Reference 的缩写，表示超文本引用。用来建立当前元素和文档之间的链接

`<link href="reset.css" rel=”stylesheet“/>`

浏览器会识别该文档为 css 文档，并行下载，不会停止对当前文档的处理，非阻塞，加载css建议使用 link，而不采用 @import 

src 是 source 的缩写，src 的内容是页面必不可少的一部分，是引入


4、meta


### 设计模式原则

单一职责原则：

- 一个程序只做好一件事

- 如果功能过于复杂就拆分开，每个部分保持独立

开放封闭原则：

- 对扩展开放，对修改封闭

- 增加需求时，扩展新代码，而非修改已有代码

里氏替换原则：

- 子类能覆盖父类

- 父类能出现的地方子类就能出现

接口隔离原则：

- 保持接口的单一独立

- 类似单一职责原则，这里更关注接口

依赖倒转原则：

- 面向接口编程，依赖于抽象而不依赖于具体

- 使用方只关注接口而不关注具体类的实现

### 设计模式

- 工厂模式

工厂模式是为了解决多个类似对象声明的问题;也就是为了解决实列化对象产生重复的问题。

将其成员对象的实列化推迟到子类中，子类可以重写父类接口方法以便创建的时候指定自己的对象类型。

父类只对创建过程中的一般性问题进行处理，这些处理会被子类继承，子类之间是相互独立的，具体的业务逻辑会放在子类中进行编写。

第一：弱化对象间的耦合，防止代码的重复。在一个方法中进行类的实例化，可以消除重复性的代码。

第二：重复性的代码可以放在父类去编写，子类继承于父类的所有成员属性和方法，子类只专注于实现自己的业务逻辑。

```
class Product {
    constructor(name) {
        this.name = name
    }
    common() {
        console.log('common')
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

let factory = new Factory()
let p = factory.create('p1')
p.common()

```