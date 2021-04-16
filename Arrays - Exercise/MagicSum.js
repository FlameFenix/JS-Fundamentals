function magicSum(array, n) {
    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondElement = array[j];
            if(element + secondElement === n) {
                console.log(element + ' ' +secondElement);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6)