function searchNumber(arr, conditions) {
    let numberOfElements = conditions[0];
    let numberOfDeletedelements = conditions[1];
    let searchingNumber = conditions[2];

    array = [];

    for (let i = 0; i < numberOfElements; i++) {
        const element = arr[i];
        array[i] = element;
    }

    array.splice(0, numberOfDeletedelements);
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element == searchingNumber) {
            counter++;
        }
    }

    console.log(`Number ${searchingNumber} occurs ${counter} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );