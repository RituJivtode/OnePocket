const arr = [1, 2, 3, 4, 5]

const arrSum = function(arr){
    if(!Array.isArray(arr)){
        console.log("Input must be an array of integers.")
    }

    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] !== 'number' || !Number.isInteger(arr[i])){
            console.log("All elements in an array must be integers.")
        }
        sum += arr[i]
    }
    return sum
}
console.log(arrSum(arr))