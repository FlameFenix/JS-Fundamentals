function sumNumbers(input) {
    let sum = Number(input.pop()) + Number(input.shift());
    console.log(sum);
}

sumNumbers(['20', '30', '40'])