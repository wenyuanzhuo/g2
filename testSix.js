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


// var a = []
// var h = []
// function choose(n, m) {
//     var temp = []
//     if( m === 0) {
//         console.log(h)
//         return 
//     }
//     for(var i = 0; i < n; i++) {
//         if (a[i] !== 1 && m < 4) {
//             a[i] = 1
//             h[m - 1] = i + 1
//             choose(n ,m - 1)
//             a[i] = 0
//         }
//     }
// }

// choose(4, 3)

// for(var i = 0; i < temp.length; i++) {
//     var arr = temp[i]
//     for(var j = 0; j < arr.length; j++) {
//         for(var k = 0; k < arr.length - j - 1; k++) {
//             if(arr[k] > arr[k + 1]) {
//                 var mdd = arr[k + 1]
//                 arr[k + 1] = arr[k]
//                 arr[k] = mdd
//             }
//         }
//     }
// }

function answer(n, m) {
    var a = []
    var h = []
    var temp = []
    var choose = function(n, m) {
        if( m === 0) {
            temp.push(h) 
            return 
        }
        for(var i = 0; i < n; i++) {
            if (a[i] !== 1 && m < 4) {
                a[i] = 1
                h[m - 1] = i + 1
                choose(n ,m - 1)
                a[i] = 0
            }
        }
    }
    choose(n ,m)
    for(var i = 0; i < temp.length; i++) {
        var arr = temp[i]
        for(var j = 0; j < arr.length; j++) {
            for(var k = 0; k < arr.length - j - 1; k++) {
                if(arr[k] > arr[k + 1]) {
                    var mdd = arr[k + 1]
                    arr[k + 1] = arr[k]
                    arr[k] = mdd
                }
            }
        }
    }
    return temp
}
console.log(answer(4, 3))