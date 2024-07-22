let arr = [
    [1, 3, 5, 6],
    [5, [6]], [4,2],
    [8, 7], 90
]
let arrObj = []
for (const arrId in arr) {
    if(Array.isArray(arr[arrId])) {
        for (const newArrId in arr[arrId]) {
            if(Array.isArray(arr[arrId][newArrId])) {
            } else {
                arrObj.push(arr[arrId][newArrId])
            }
        }
    } else {
        arrObj.push(arr[arrId])
    }
}
let newArrObj = [...new Set(arrObj)];
console.log(newArrObj)

