function sumElements(n, k) {
    let array = [];
    array[0] = 1;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let counter = 0;
        for (let j = i - 1; j >= 0; j--) {
            sum += array[j];
            counter++;
            if (counter === k) {
                break;
            }
        }
        array[i] = sum;
    }
    console.log(array.join(' '));
}
sumElements(8, 2)