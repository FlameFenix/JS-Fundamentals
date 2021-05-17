function bombNumbers(arr, bombCriteria) {
    let bomb = bombCriteria[0];
    let range = bombCriteria[1];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element == bomb) {
            let startIdx = arr.indexOf(bomb);
            if (startIdx - range >= 0) {
                arr.splice(arr.indexOf(bomb) - range, (range * 2) + 1)
            } else if (startIdx - range < 0) {
                arr.splice(0, range + 1);
            } else if(startIdx == arr.length - 1) {
                startIdx = startIdx - range;
                arr.splice(startIdx, range + 1);
            }
            i = -1;
        }
    }

    let sum = 0;

    arr.forEach(element => {
        sum += element;
    });

    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );