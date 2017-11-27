// function fn(n) {
//     if(n > 9) {
//       return n
//     }
//     return n + fn(n+1)
// }
// console.log(fn(1))

// h = hash
var h = []
var p = []


function dosomething(position) {
    if (position === 4) {
        console.log(p)
        controller({ p: p })
        return
    }
    for (var i = 1; i <= 3; i++) {
        if (h[i] !== 1 && position < 4) {
            h[i] = 1
            p[position] = i;
            dosomething(position + 1)
            // p[position] = 0
            h[i] = 0
        }
    }
}

function controller(opts) {
    var  p = opts.p
}

dosomething(1)