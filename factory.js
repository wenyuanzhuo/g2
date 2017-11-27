// 质数
function work(n) {
    for( var i = 2; i < n; i++) {
        if(n % i == 0) {
            return false
        } 
    }
    return true
}
console.log(work(3))


// 最小公倍数min
function workmin(x,y) {
    for (var i = Math.min(x, y); i > 0; i--) {
        var max = x*y
        if (x % i == 0 && y % i == 0)
            return max/i;
    }
}
console.log(workmin(6, 13))
//最大公约数max，
function workmax(x,y) {
    for (var i = Math.min(x, y); i > 0; i--) {
        if (x % i == 0 && y % i == 0) {
            return i;
        } 
    }
}
console.log(workmax(6, 13))

//因子
function quotient(n) {
    var num = [n, '=', 1, 'x']
    for(var i=2; i<=n; i++) {
        while(n%i==0) {
            num.push(i)
            n/=i;
            if(n > 1) {
                num.push('x')
            }   
        }
    }
    return num.join('')
}
console.log(quotient(10))