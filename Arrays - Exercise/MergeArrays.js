function merge(firstArray, secondArray) {
    let thirdArray = new Array();
    for (let index = 0; index < firstArray.length; index++) {
        const element = firstArray[index];
        if (index % 2 != 0) {
            thirdArray[index] = firstArray[index] + secondArray[index];
        } else if (index % 2 == 0) {
            thirdArray[index] = Number(firstArray[index]) + Number(secondArray[index]);
        }
    }
    let arrayToString = thirdArray.join(' - ');
    console.log(arrayToString);
}

merge(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);