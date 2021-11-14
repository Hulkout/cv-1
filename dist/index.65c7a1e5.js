let html = document.querySelector("#demo"); /*  先死记 通过CSS选择器找到这个元素*/  //拿到demo
let style = document.querySelector("#style"); //html就是放HTML 的style就是方css的
let string = `
/*你好，我叫小芳
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border : 1px solid red;
    width: 400px;
    height: 400px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先把 div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: rgb(28,27,10);
background: linear-gradient(90deg, rgba(28,27,10,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
`;
let string2 = '';
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        console.log(n);
        console.log(string[n]);
        if (string[n] == '\n') string2 += '<br>';
        else if (string[n] == ' ') string2 += '&nbsp;';
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n + 1 < string.length) {
            n++;
            step();
        }
    }, 10);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
