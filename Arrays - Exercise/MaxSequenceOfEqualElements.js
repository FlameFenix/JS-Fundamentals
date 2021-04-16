function MaxSequence(input) {
    
    let maxSequence = [];
    for (let index = 0; index < input.length; index++) {
        const firstElement = input[index];
        let newArray = [];
        newArray.push(firstElement);
        for (let second = index + 1; second < input.length; second++) {
            const secondElement = input[second];
            if(firstElement == secondElement) {
                newArray.push(firstElement);
            } else {
                break;
            }
        }
        if(newArray.length > maxSequence.length) {
         maxSequence = newArray;   
        }
    }
    console.log(maxSequence.join(' '));
}

MaxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);

