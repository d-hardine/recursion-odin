//fibonacci iteration
function fibs(n) {
    let results = [0,1]
    let cache = 0
    if(n == 0)
        return [0]
    else if(n == 1)
        return results
    else {
        for(let i=2; i<=n; i++) {
            cache = results[i-1] + results[i-2]
            results.push(cache)
        }
    }
    return results
}
console.log(fibs(16))

function fibcrec(n, array = [0,1,1]) {
    if(n == 0)
        return [0]
    else if(n == 1)
        return [0,1]
    else if(n == 1)
        return [0,1,1]
    else {
        let fOne = Number(fibcrec(n-1, array).slice(-1)) //just use one 'array', because it'll double
        let fTwo = Number(fibcrec(n-2).slice(-1))
        let results = fOne + fTwo
        if(array.includes(results) == false)
            array.push(results)
        return array
    }
}
console.log(fibcrec(16))

//merge sort
let needSorted1 = [3, 2, 1, 13, 8, 5, 0, 1]
let needSorted2 = [105, 79, 100, 110]

function mergeSort(array) {
    if(array.length <=1)
        return array

    let arrayLow = 1;
    let arrayHigh = array.length
    if(arrayLow < arrayHigh) {
        let arrayMid = Math.floor((arrayHigh + arrayLow) / 2)
        let arrayLeft = array.slice(0,arrayMid)
        let arrayRight = array.slice(arrayMid, arrayHigh)
        return merging(mergeSort(arrayLeft), mergeSort(arrayRight))
    }
}
console.log(mergeSort(needSorted1))

//modified
function merging(arrayLeft, arrayRight) {
    let mergedArray = []
    let i = 0
    let j = 0
    let k = 0
    while(i < arrayLeft.length && j < arrayRight.length) {
        if(arrayLeft[i] < arrayRight[j]) {
            mergedArray[k] = arrayLeft[i]
            i = i + 1
            k = k + 1
        }
        else {
            mergedArray[k] = arrayRight[j]
            j = j + 1
            k = k + 1
        }
    }
    for(let z = i; z < arrayLeft.length; z++ ){
        mergedArray[k] = arrayLeft[i]
        k = k + 1
    }
    for(let z = j; z < arrayRight.length; z++ ){
        mergedArray[k] = arrayRight[z]
        k = k + 1
    }
    return mergedArray
}
//modified end

//the original two way sort
function twoWaySort(array) {
    let mergedArray = []
    let arrayLow = 1;
    let arrayHigh = array.length
    let arrayMid = Math.floor((arrayHigh + arrayLow) / 2)
    let arrayLeft = array.slice(0,arrayMid)
    let arrayRight = array.slice(arrayMid, arrayHigh)
    let i = 0
    let j = 0
    let k = 0
    while(i < arrayLeft.length && j < arrayRight.length) {
        if(arrayLeft[i] < arrayRight[j]) {
            mergedArray[k] = arrayLeft[i]
            i = i + 1
            k = k + 1
        }
        else {
            mergedArray[k] = arrayRight[j]
            j = j + 1
            k = k + 1
        }
    }
    for(let z = i; z < arrayLeft.length; z++ ){
        mergedArray[k] = arrayLeft[i]
        k = k + 1
    }
    for(let z = j; z < arrayRight.length; z++ ){
        mergedArray[k] = arrayRight[z]
        k = k + 1
    }
    return mergedArray
}
//the original end
