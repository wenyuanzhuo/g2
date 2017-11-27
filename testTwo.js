// s1<10000
// function work(s1) {
//     var s = '123456789101112131415161718192021222324252627282930';
//     var answer = s.indexOf(s1)
//     if(answer === -1) {
//         return 'NO'
//     }else {
//         return answer + 1
//     }
   
// }
// console.log(work(23))

// 三角形
// function triangle(n) {
//     var arr = [
//         [0],
//         [0,7],
//         [0,3,8], 
//         [0,8,1,0],
//         [0,2,7,4,4], 
//         [0,4,5,2,6,5]
//     ]
//     var answer = 0
//     for(var i= 1 ; i < arr.length; i++){
//         for(var j = 1; j < i ; j++) {
//             arr[i][j] += Math.max(Number(arr[i-1][j-1]), Number(arr[i-1][j]))
//             if(arr[i][j] > answer)
//             answer = arr[i][j]
//         }
//     } 
//     console.log(arr[4][2])
//     return answer
// }
// console.log(triangle())