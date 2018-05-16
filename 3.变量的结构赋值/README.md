##  基本用法
- ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
```
let a=1;
let b=2;
let c=3;
```
- 以前，为变量赋值，只能直接指定值
```
let [a,b,c]=[1,2,3];
```
- 上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值
- 如果等号的右边不是数组(或者严格地说，不是可遍历的结构)，那么将会报错
```
报错 因为等号右边的值，要么转为对象以后不具备Iterator接口(前五个表达式),要么本身就不具备Iterator接口(最后一个表达式)
let [foo]=1;
let [foo]=false;
let [foo]=NaN;
let [foo]=undefined;
let [foo]=unll;
let [foo]={};
```
## 默认值
- ES6内部使用严格相等运算符(===)，判断一个位置是否有值。所以只有当一个数组成员严格等于undefined，默认值才会生效
```
let [x=1]=[undefined];//1
let [x=1]=[null];//null
```
- 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined.
- 默认值可以引用解构赋值的其他变量，但该变量必须依据声明
```
let [x=1,y=x]=[];//x=1;y=1
let [x=1,y=x]=[2];//x=2;y=2
let [x=1,y=x]=[1,2];//x=1;y=2
let [x=y,y=1]=[];//ReferenceError: y is not defined
上面最后一个表达式之所以胡 报错，是因为x用y做默认值时，y还没有声明
```
## 对象的解构赋值
- 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定，而对象的而熟悉没有次序，变量必须与属性同名，才能取到正确的值
```
let {bar,foo}={foo:'aaa',bar:'bbb'};//bar=>'bbb' foo=>'aaa'
let {baz}={foo:'aaa',bar:'bbb'};//baz=>undefined
```
- 上面代码的第一个例子，等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致，但是对取值完全没有影响，第二个例子的变量没有对象的同名属性，导致取不到值，最后等于undefined
- 如果变量名与属性名不一致，必须写成下面这样
```
let {foo:baz}={foo:'aaa',bar='bbb'};//baz=>'aaa'
```
- 对象的解构赋值的内部机制，是先找到同名属性，然后在赋给对应的变量。真正被赋值的是后者，而不是前者
```
let {foo:baz}={foo:'aaa',bar:'bbb'};
console.log(baz);//'aaa'
console.log(foo);//ReferenceError: foo is not defined
```
- 解构也可以用于嵌套结构的对象
```
let obj={
    p:[
        'Hello',
        {y:'World'}
    ]
};
let {p:[x,{y}]}=obj;
console.log(x,y);//Hello World
```
- 嵌套赋值
```
let obj={};
let arr=[];
({foo:obj.prop,bar:arr[0]}={foo:123,bar:true});
console.log(obj);//{ prop: 123 }
console.log(arr);//[ true ]
```
- 对象的解构也可以指定默认值
```
let {x=3}={};
console.log(x);//3
let {x,y=5}={x:1};
console.log(x,y);//1,5
let {x:y=3}={};
console.log(y);//3
let {x:y=3}={x:5};
console.log(y);//5
let {message:msg='something went wrong'}={};
console.log(msg);//'something went wrong
```

- 对象的属性值严格等于undefined
```
let {x=3}={x:undefined};
console.log(x);//3
let {x=3}={x:null};
console.log(x);//null
```
- 上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效赋值，导致默认值3不会生效
- 如果解构失败，变量的值等于undefined
```
let {foo}={bar:'baz'};
console.log(foo);//undefined
```

## 字符串的解构赋值
- 字符串也可以解构赋值，这是因为此时，字符串被转换成了一个类似数组的对象
```
const [a,b,c,d,e]='hello';
console.log(a,b,c,d,e);//'h' 'e' 'l' 'l' 'o'
```
## 数值和布尔值的解构赋值
- 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
- 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
```
let {prop:x}=undefined;
let {prop:y}=null;
console.log(x);// TypeError 
console.log(y);// TypeError
```
## 函数参数的解构赋值
```
function add([x,y]){
    return x+y;
};
add([1,2]);//3
```
- 函数参数的解构也可以使用默认值
```
function move({x=0,y=0}={}){
    return [x,y];
};
move({x:3,y:8});//[3,8]
```
## 圆括号问题
- ES6的规则是，只要有可能导致解构的歧义，就不得使用圆括号，但是，这条规则实际上不那么容易辨别
## 可以使用圆括号的情况
- 赋值语句的非模式部分，可以使用圆括号
```
console.log([(b)] = [3])//[3]
console.log(({p:(d)}={}))//{}
console.log([(parseInt.prop)]=[3])//[3]
```
- 上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。

## 用途
- 1.交换变量值
```
let x=1;
let y=2;
[x,y]=[y,x];
```
- 2.从函数返回多个值
   - 函数只能返回一个值，如果要返回多个值，只能将他们放在数组或对象里返回
- 3.函数参数的定义
- 4.提取JSON数据
```
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]
```
- 5.函数参数的默认值
- 6.遍历Map结构
- 7.输入模块的指定方法
  - 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰
```
const { SourceMapConsumer, SourceNode } = require("source-map");
```