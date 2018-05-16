function log(x,y='world'){
    console.log(x,y);
};
log('hello');//hello world
log('hello','china');//hello china
log('hello','');//hello

console.log((function(a){}).length);//1
console.log((function (a=5){}).length);//0
console.log((function (a,b,c=5){}).length);//2