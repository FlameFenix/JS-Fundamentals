function arrayManipulation(input) {
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }

    newArray.forEach(element => {
        console.log(element);
    });
}

arrayManipulation([3, -2, 0, -1])