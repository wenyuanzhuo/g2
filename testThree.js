
// function letter(n) {
    
//     if( n > 9) {
//         return n
//     } 

//     return n + letter(n + 1)  
// }
// console.log(letter(1))

// var sl;
// function shuliang (n) {
//     if(n==6) {
//         sl=1;

//     } else {
//         sl = (shuliang( n + 1) + 1) * 2;

//     }
//     return sl;

//    }

//   console.log( shuliang(0));



// var data = [
//     {id: 1, address: "安徽", parent_id: 0},
//     {id: 2, address: "江苏", parent_id: 0},
//     {id: 3, address: "合肥", parent_id: 1},
//     {id: 4, address: "庐阳区", parent_id: 3},
//     {id: 5, address: "大杨镇", parent_id: 4},
//     {id: 6, address: "南京", parent_id: 2},
//     {id: 7, address: "玄武区", parent_id: 6},
//     {id: 8, address: "梅园新村街道", parent_id: 7},
//     {id: 9, address: "上海", parent_id: 0},
//     {id: 10, address: "黄浦区", parent_id: 9},
//     {id: 11, address: "外滩", parent_id: 10},
//     {id: 12, address: "安庆", parent_id: 1}
// ];
// function familyTree(arr, id) {
//     var temp = [],
//         list = 0;
//     var forFn = function(arr, id, list){
//         for (var i = 0; i < arr.length; i++) {
//             var item = arr[i];
//             if (item.parent_id == id) {
//                 item.list = list
//                 temp.push(item); 

//                 forFn(arr,item.id,list + 1);
//             }
//         }
//     };
//     forFn(arr, id, list);
//     return temp;
// }

// console.log(familyTree(data,0));


// function add(n, s) {
//     if(n == 1 && s >= 1 && s <= 6) {
//         return 1
//     }else if (n == 1 && (s < 1 || s > 6)) {
//         return 0
//     }
//     return add(n - 1, s - 1) + 
//            add(n - 1, s - 2) +
//            add(n - 1, s - 3) +
//            add(n - 1, s - 4) +
//            add(n - 1, s - 5) +
//            add(n - 1, s - 6) 
// }
// console.log(add(10, 50))

// 退出条件 arr.length = i 1或者2
function permutation(arr){  
    if (arr.length == 1)  
        return arr;  
    else if (arr.length == 2)  
        return [[arr[0],arr[1]],[arr[1],arr[0]]];  
    else {  
        var temp = [];  
        for (var i = 0; i < arr.length; i++) {  
            var save = arr[i];  
            arr.splice(i, 1); //取出来的某项
            var res = permutation(arr);//剩下递归的全排列
            arr.splice(i, 0, save);//将arr[j]放入数组，保持原来的位置  
            for (var j = 0; j < res.length; j++) {  
                res[j].push(arr[i]);  
                temp.push(res[j]);  
            }  
        }  
        return temp;  
    }  
}  
console.log(permutation([1,2,3]))


function swap(arr, i, j) {
    if(i != j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}
function permut(arr) {
    (function forFn(n) {
       for(var i = n; i < arr.length; i++) {
            swap(arr, i, n)
            if(n + 1 < arr.length - 1) {
                forFn(n + 1)
            } else {
                console.log(arr)
            }
            swap(arr, i, n)//返回原来数组
       }
    })(0)
}
permut([1, 2, 3])
