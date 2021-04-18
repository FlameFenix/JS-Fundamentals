function distinctArray(input) {
    let arr = [];
    arr = input;
    for (let i = 0; i < arr.length - 1; i++) {
        const firstElement = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const secondElement = arr[j];
            if (firstElement == secondElement) {
                arr.splice(j, 1)
                j--;
            }
        }
    }
    console.log(arr.join(' '));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);