// var a = 10
// var b = a
// console.log(a+','+b) 
// a++
// console.log(a+','+b) 
// b++
// console.log(a+','+b) 

// var obj = {
//     attr:'obj attr value'
// };
// function func(obj){
//     obj = { 
//         attr:'new attr value!'
//     };
// }
// func(obj.attr);
// console.log(obj.attr);

// js编译过程 预加载 执行两个阶段  
    // 预编译
    // 首先定义一个全局变量 var a 目前不知道类型 undefined 
    // 跳到 var a 也为undefined
    // 运行
    // a = 100 运行到func 提升 接着运行到console
    // 此时有一个var a 局部变量 此时还未赋值 所以console为undefined
    // 之后 a = 200
    // 接着console 而此时局部变量 var a = 200 console 为200

var a = 100//var a 预加载阶段    a=100 全局变量 执行阶段
//func() 提升后
function func() {
    console.log(a)
    var a = 200//var a    a=200 局部变量
    console.log(a)
}
func()//函数提升