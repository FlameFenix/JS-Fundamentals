function EvenOrOdd(input) {
    let newArray = new Array();
    let sumOld = 0;
    let sumNew = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if(element % 2 != 0) {
            newArray[index] = element - index;
            sumNew += newArray[index];
            sumOld += element;
        } else if(element % 2 == 0) {
            newArray[index] = element + index;
            sumNew += newArray[index];
            sumOld += element;
        }
    }
    console.log(newArray);
    console.log(sumOld);
    console.log(sumNew);
}

EvenOrOdd([-5, 11, 3, 0, 2]);