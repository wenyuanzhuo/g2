// function fn(n) {
//     if(n > 9) {
//       return n
//     }
//     return n + fn(n+1)
// }
// console.log(fn(1))

// h = hash
// var h = []
// var p = []


// function dosomething(position) {
//     if (position === 4) {
//         console.log(p)
//         controller({ p: p })
//         return
//     }
//     for (var i = 1; i <= 3; i++) {
//         if (h[i] !== 1 && position < 4) {
//             h[i] = 1
//             p[position] = i;
//             dosomething(position + 1)
//             // p[position] = 0
//             h[i] = 0
//         }
//     }
// }

// function controller(opts) {
//     var  p = opts.p
// }

// dosomething(1)


var a = []
var h = []
function choose(n, m) {

    if (m === 0) {
        console.log(h)
        contorller({ h: h})
        return
    }
    for (var i = 0; i < n; i++) {
        if (a[i] !== 1 && m < 4) {
            a[i] = 1
            h[m - 1] = i + 1
            choose(n, m - 1)
            a[i] = 0
        }
    }
}
function contorller(opts) {
    var p = opts.h
    // for (var k = 0; k < p.length; k++) {//改变数组对象
    //     for (var j = 0; j < p.length - k - 1; j++) {
    //         if (p[j] > p[j + 1]) {
    //             var mdd = p[j + 1]
    //             p[j + 1] = p[j]
    //             p[j] = mdd
    //         }
    //     }
    // }

    console.log(p)
}

choose(4, 2)


// function answer(n, m) {
//     var a = []
//     var h = []
//     var temp = []
//     var choose = function(n, m) {
//         if( m === 0) {
//             console.log(h)
//             temp.push(h) 
//             return 
//         }
//         for(var i = 0; i < n; i++) {
//             if (a[i] !== 1 && m < 4) {
//                 a[i] = 1
//                 h[m - 1] = i + 1
//                 choose(n ,m - 1)
//                 a[i] = 0
//             }
//         }
//     }
//     choose(n ,m)

//     return temp
// }
// console.log(answer(4, 3))