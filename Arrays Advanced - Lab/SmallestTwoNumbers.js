function smallestNumbers(input) {

    let array = [];
    for (let i = 0; i < 2; i++) {
        let minValue = 200000000;
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(element < minValue && element !== array[0]) {
                minValue = element;
            }
        }
        array.push(minValue);
    }
    console.log(array.join(' '));
}

smallestNumbers([30, 15, 50, 5])
