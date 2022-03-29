// Write your code below this line.

let luckyNumber = (n) => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let random = []
    for(let i = 0; i < n; i++){
            let x = Math.floor(Math.random() * arr.length)
            random.push(arr[x])
            arr.splice(x,1)
    
    }
    return random
}
console.log(luckyNumber(8));