
// function insertionSort(arr) {
//     var current;
//     for (var i = 1; i < arr.length; i++) {
//         current = arr[i];
//         while(i - 1 >= 0 && arr[i - 1] > current) {//左边大于右边 移位 
//             arr[i] = arr[i - 1];
//             i--;
//         }
//         arr[i] = current;
//     }
//     return arr;
// }
// console.log(insertionSort([2,1,3,5,7,4]))




function swap(items, before, after) {
    var temp = items[before]
    items[before] = items[after]
    items[after] = temp
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //取中间的为基准值
        i = left,
        j = right
    while (i <= j) {
        while ( items[i] < pivot) {
            i++
        }
        while ( items[j] > pivot) {
            j--
        }
        if( i <= j) {
            swap(items, i, j)
            i++
            j--
        }
    }
    return i 
}
function quSort(items, left, right) {
    var index
    if( items.length > 1) {//退出条件
        index = partition(items, left, right) //第一次分割的下标 i
        if(left < index - 1 ) {//左边
            quSort(items, left, index - 1)
        }
        if( right > index) {//右边
            quSort(items, index, right)
        }
    }
    return items 
}
console.log(quSort([4,2,3,5,6,9,10,2], 0, 7))