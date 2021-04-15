function Condense(input) {

    let sum = 0;
    let oldArray = input;
    let newArray = new Array();
    if(oldArray.length == 1)
    {
        return console.log(`${oldArray[0]}`)
    }
    for (let index = 0; index < oldArray.length; index++) {
        newArray.length = oldArray.length - 1;
        for (let secondIndex = 0; secondIndex < newArray.length; secondIndex++) {
            const element = oldArray[secondIndex];
            const prevElement = oldArray[secondIndex + 1];
            newArray[secondIndex] = prevElement + element;
            oldArray[secondIndex] = prevElement + element;
        }
        oldArray.length -= 1;
        index--;
        if (oldArray.length == 1) {
            console.log(oldArray[0]);
            break;
        }
    }

    

}

Condense([2,10,3]);