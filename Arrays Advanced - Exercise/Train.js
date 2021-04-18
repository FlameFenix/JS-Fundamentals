function train(input) {
    let arr = [];
    let string = input[0];
    let wagonCapacity = input[1];
    arr = string.split(' ').map(Number);
    let currentElement = [];
    let isIncludes = false;
    for (let i = 2; i < input.length; i++) {
        const element = input[i];
        currentElement = element;
        isIncludes = currentElement.includes("Add");
        if(isIncludes) {
            currentElement = element.split(' ');
            arr.push(Number(currentElement[1]));
        } else {
            for (let j = 0; j < arr.length; j++) {
                const element = arr[j];
                let elementToMap = Number(currentElement);
                if(element + elementToMap <= wagonCapacity)
                {
                    arr[j] = element + elementToMap;
                    break;
                }
            }
        }
    }

    let arrayToString = arr.join(' ');
    console.log(arrayToString);
} 

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)