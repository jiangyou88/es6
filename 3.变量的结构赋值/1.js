let obj={first:'hello',last:'world'};
let {first:f,last:l}=obj;
console.log(f,l);//hello world

let {foo:foo,bar:bar}={foo:'aaa',bar:'bbb'};
console.log(foo,bar);//'aaa' 'bbb'

let {foo:baz}={foo:'aaa',bar:'bbb'};
console.log(baz);//'aaa'
console.log(foo);//ReferenceError: foo is not defined

let obj={
    p:[
        'Hello',
        {y:'World'}
    ]
};
let {p:[x,{y}]}=obj;
console.log(x,y);//Hello World

let obj={};
let arr=[];
({foo:obj.prop,bar:arr[0]}={foo:123,bar:true});
console.log(obj);//{ prop: 123 }
console.log(arr);//[ true ]

let {x=3}={};
console.log(x);//3
let {x,y=5}={x:1};
console.log(x,y);//1,5
let {x:y=3}={};
console.log(y);//3
let {x:y=3}={x:5};
console.log(y);//5
let {message:msg='something went wrong'}={};
console.log(msg);//'something went wrong'

let {x=3}={x:undefined};
console.log(x);//3
let {x=3}={x:null};
console.log(x);//null

let {foo}={bar:'baz'};
console.log(foo);//undefined


console.log(({}=[true,false]))//[ true, false ]
console.log(({}='abc'));//'abc'
console.log(({}=[]));//[]

const [a,b,c,d,e]='hello';
console.log(a,b,c,d,e);//'h' 'e' 'l' 'l' 'o'

let {prop:x}=undefined;
let {prop:y}=null;
console.log(x);// TypeError 
console.log(y);// TypeError

function add([x,y]){
    return x+y;
};
add([1,2]);//3

function move({x=0,y=0}={}){
    return [x,y];
};
move({x:3,y:8});//[3,8]

console.log([(b)] = [3])//[3]
console.log(({p:(d)}={}))//{}
console.log([(parseInt.prop)]=[3])//[3]

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
console.log(map);