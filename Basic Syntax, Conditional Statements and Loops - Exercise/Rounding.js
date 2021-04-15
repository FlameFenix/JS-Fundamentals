function Rounding(number, float) {
    let n = Number(number);
    let count = Number(float);
    let sum = 1;
    for (let index = 1; index <= count; index++) {
        sum *= 10;
    }
    console.log(Math.round(n * sum) / sum);
}

Rounding(10.5,3);