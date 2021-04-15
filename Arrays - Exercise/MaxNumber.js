function MaxNumber(array) {
    let elements = '';
    for (let index = 0; index < array.length; index++) {
        const firstElement = array[index];
        let counter = 0;
        for (let second = index + 1; second < array.length; second++) {
            const secondElement = array[second];
            if (firstElement > secondElement) {
                counter++;
            }
        }
        if (counter == array.length - (index + 1)) {
            elements += `${firstElement} `;
        }
    }

    console.log(elements);
}

MaxNumber([14, 24, 3, 19, 15, 17]);