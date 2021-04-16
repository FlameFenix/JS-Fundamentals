function numbersPrint(input) {
    let n = input.shift();
    let first = input.slice(0, n);
    let second = input.slice(input.length - n, input.length);

    console.log(first.join(' '));
    console.log(second.join(' '));
}

numbersPrint([3,
    6, 7, 8, 9]
   )