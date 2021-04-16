function Sums(input) {
    let leftSum = 0;
    let isFinded = false;
    let indexFinded = 0;
    if(input.length > 1) {
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            let rightSum = 0;
            if(index > 0) { 
                for (let second = index + 1; second < input.length; second++) {
                    const secondElement = input[second];
                    rightSum += secondElement;
                }

                if(rightSum == leftSum) {
                    isFinded = true;
                    indexFinded = index;
                    break;
                }
            }
            leftSum += element;
        }
        console.log(`${(isFinded ? `${indexFinded}` : 'no')}`);
    } else {
        console.log(0);
    }
}

Sums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);