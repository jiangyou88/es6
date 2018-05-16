## 字符串的扩展
- includes():返回布尔值，表示是否找到了参数字符串
- startsWith():返回布尔值，表示参数字符串是否在原字符串的头部
- endsWith():返回布尔值，表示参数字符串是否在原字符串的尾部
```
let s='hello world!';
console.log(s.startsWith('hello'));//true
console.log(s.endsWith('!'));//true
console.log(s.includes('o'));//true
```
## 模板字符串
- 模板字符串(template string) 是增强版的字符串，用反引号`标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
- 模板字符串中嵌入变量，需要将变量名写在${}之中
- 模板字符串之中还能调用函数
## 模板编译
```
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
```
- 上面代码在模板字符串之中，放置了一个常规模板，该模板使用<%...%>放置javascripnt代码,使用<%=...%>输出JavaScript表达式