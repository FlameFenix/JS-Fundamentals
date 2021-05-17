function sorting(input) {

    let arr = input.map(Number);
    let count = 0;
    let newArr = [];
    let arrLength = arr.length;

    while (count < arrLength) {

        let biggestValue = 0;
        let lowestValue = 3000000;

        if(count % 2 == 0) {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if(element > biggestValue) {
                    biggestValue = element;
                }
            }
            arr.splice(arr.indexOf(biggestValue), 1);
            newArr[count] = biggestValue;
        }
        else {

            for (let i = 0; i < arr.length; i++) {
                let element = arr[i];
                if(element < lowestValue) {
                    lowestValue = element;
                }
            }
            arr.splice(arr.indexOf(lowestValue), 1);
            newArr[count] = lowestValue;
        }
        count++;
    }

    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);