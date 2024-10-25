// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce(callback, initialValue)
// const result = numbers.reduce((total, number) => {
//     return total + number
// }, 10)
// Trường hợp 1 không chuyền initial thì cái biến tích chữ là phần tử đầu tiên của mảng
// trường hợp 2 chuyền initial thi biến tích chữ là initial, và biến tiếp là phần tử dầu tiên của mảng


// console.log(result)

Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    if(arguments.length < 2){
        result = this[0]
        i = 1;
    }
    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce2((total, number, index, array) => {
    // console.log(`current: ${number}, index: ${index}, array: ${array}`)
    return total + number
}, 10)

console.log(result)