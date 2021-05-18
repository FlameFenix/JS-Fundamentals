function bombNumbers(arr, bombCriteria) {
    let bomb = bombCriteria[0];
    let range = bombCriteria[1];

    while (arr.includes(bomb)) {
        let index = arr.indexOf(bomb);
        let elementsToRemove = (range * 2) + 1;
        let startIndex = index - range;
        if(startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        } 
        arr.splice(startIndex, elementsToRemove);
        
    }
    console.log(arr.reduce((a,b) => a + b, 0));
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );