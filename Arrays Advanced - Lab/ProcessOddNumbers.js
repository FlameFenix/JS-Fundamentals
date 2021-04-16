function oddNumbers(input) {
    let array = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(i % 2 != 0) {
            array.unshift(element * 2);
        }
    }

    console.log(array.join(' '));
}

oddNumbers([10, 15, 20, 25])