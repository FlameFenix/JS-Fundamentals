function Equals(firstArray, secondArray) {
    let counter = 0;
    let sum = 0;
    for (let index = 0; index < firstArray.length; index++) {
        const first = firstArray[index];
        const second = secondArray[index];
        if (first == second) {
            counter++;
            sum += Number(first);
            if (counter == firstArray.length) {

                console.log(`Arrays are identical. Sum: ${sum}`)
            }
        }
        else {
            console.log(`Arrays are not identical. Found difference at ${index} index`)
            break;
        }

    }
}

Equals(['10','20','30'], ['10','20','30']);