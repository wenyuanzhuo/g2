


function flatternArr(a) {
    const arr = []
    for(var i = 0; i< a; i++) {
        arr.push(Math.ceil(Math.random() * 10))
    }
    const newArr = []
    for(var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    for(var i = 0; i< newArr.length; i++) {
        for(var j = 0; j<newArr.length - i - 1; j++) {
            if(newArr[j]> newArr[j+1]) {
                var tmp = newArr[j+1]
                newArr[j+1] = newArr[j]
                newArr[j] = tmp
            }
        }
    }
    console.log(a)
    console.log(arr.join(' '))
    console.log(newArr.length)
    
    return newArr.join(' ')
}

console.log(flatternArr(10))

