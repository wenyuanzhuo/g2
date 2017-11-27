// function fn(n) {
//     if(n > 9) {
//       return n
//     }
//     return n + fn(n+1)
// }
// console.log(fn(1))

// var h = []
// var p = []


function dosomething(position) {
    for (var i = 0; i < 6; i++) {
        if (h[i] !== 1 && position < 6) {
            h[i] = 1
        } else {
            p[position] = i;
            dosomething(position + 1)
        }
    }
}

dosomething(0)