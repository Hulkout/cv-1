// let html = document.querySelector("#demo");/*  先死记 通过CSS选择器找到这个元素*/  //拿到demo
// let style = document.querySelector("#style"); //html就是放HTML 的style就是方css的
// let string = `
// /*你好，我叫小芳
// *接下来我演示一下我的前端功底
// *首先我要准备一个div
// */
// #div1{
//     border : 1px solid red;
//     width: 400px;
//     height: 400px;
// }
// /*接下来我把div变成一个八卦图
// *注意看好了
// *首先把 div变成一个圆
// */
// #div1{
//     border-radius: 50%;
//     box-shadow: 0 0 3px rgba(0,0,0,0.5);
//     border:none;
// }
// /*
// *八卦是阴阳形成的
// *一黑一白
// */
// #div1{
//     background: rgb(28,27,10);
// background: linear-gradient(90deg, rgba(28,27,10,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
// }
// `;
// //以上因为 中文会影响CSS所以加个注释即可
// let string2 = '';
// /*上面加了空格了所以第0号和有空格的元素就是空格，把所有回车变成回车 
// 如果只写一个\n他只变第一个空格 所以要用到正则表达式  记住先不管是啥
// replace 把字符串里的一个东西变成另外的东西*/
// let n = 0;
// /*demo.innerHTML = string.substring(0,n);  
// 这句话得删除掉 因为如果第一句里面有回车 那下边做的事改变不了他 得把下面的逻辑在上面再写一遍
// 想办法把它弄下去 n就从-1开始 
// /*从哪一个索引开始到哪一个索引结束*/ 
// /*settimeout 我想让他1变成2 3秒之后  */
// /*我让他每三秒加一个  老手的技巧不用setinterval  老手用递归的settimeout*/
// /*setInterval(() => {
//     n++
//     demo.innerHTML = n;
// }, 1000);*/
// let step = () => {  /*描述每一步做什么 一秒钟之后把n+1然后放进去*/
//     setTimeout(() => {
//         console.log(n)//但是这次改动又出现了一个undefined  用它调试  发现最后打印出  undefined 的是第56个n 然后查看第
//         console.log(string[n])
       
//         if (string[n] == '\n') {
//             string2 += '<br>'
//         } else if (string[n] == ' '){
//             string2 += '&nbsp;'        //html 里面有个转义符 
//         }
//         else {
//              string2 += string[n];
//         }




//        // string[n] == '\n' ? string2 += '<br>' : string2 += string[n];
//        // string2 += （string[n] == '\n' ? '<br>' : string[n]）; 上下这俩一样
//         // if (string[n] === '\n') { /*之前是一对一现在是一对四   如果是回车*/
            
//         // } else {//如果不是回车就照搬
            
            
//         // };
//         //demo.innerHTML = string.substring(0,n);
//         html.innerHTML = string2;
//         style.innerHTML = string.substring(0,n);
//         if (n+1  < string.length) { /*这种情况因为有n++所以要考虑到if里面的判断 不能多不能少据我观察可以和芳芳一样放前面 也可以用像我一样放后面  都试一下就好*/
//                         //如果n不是最后一个 假设length是55 n最后满足这个条件就是n=54 然后 n++ =55 这个就读不到了  就会出现一个undefined
//             n++;
//             step();
//         }
           
//    }, 10);
   
// };

// step();
// /*step();
// step();这样不可以 因为每次执行都是一秒后 所以要放在step里面 再在外边执行 有点烧脑
// 相当于用settimeout模拟了setinterval
// 好处就是可以随时停止 加个if
// */


//   /*注意这里反引号   然后测试发现字体变红了 说明可以改写*/



