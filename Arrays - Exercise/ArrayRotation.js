function rotation(array, rotation) {

    for (let cycle = 0; cycle < rotation; cycle++) {
        const firstElement = array[0];

        for (let index = 0; index < array.length - 1; index++) {
            array[index] = array[index + 1];
        }
        array[array.length - 1] = firstElement;
    }

    let arrayToString = array.join(' ');
    console.log(arrayToString);
}

rotation([2, 4, 15, 31], 5);