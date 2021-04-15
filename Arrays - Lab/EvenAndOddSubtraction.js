function Subtraction(input) {
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if(element % 2 != 0)
        {
            oddSum += element;
        } else {
            evenSum += element;
        }
        
    }
    console.log(evenSum - oddSum);
}

Subtraction([3,5,7,9]);