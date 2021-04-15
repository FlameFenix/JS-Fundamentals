function OddNumbers(input) {
    let n = Number(input);
    let count = 0;
    let index = 0;
    let sum = 0;
    while (count != n) {
        index++;
        if(index % 2 != 0) {
            console.log(index);
            sum += index;
            count++;
        }
    }
    console.log(`Sum: ${sum}`);
}

OddNumbers(3);