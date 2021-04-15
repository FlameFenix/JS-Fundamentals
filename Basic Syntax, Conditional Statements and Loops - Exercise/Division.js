function Division(input) {
    let number = Number(input);
    let divisor = [2, 3, 6, 7, 10];

    let biggestDivisor = 0;

    for (let index = 0; index < divisor.length; index++) {
        if(number % divisor[index] == 0) {
            if(divisor[index] > biggestDivisor)
            {
                biggestDivisor = divisor[index];
            }
        }
    }

    biggestDivisor > 0 ? console.log(`The number is divisible by ${biggestDivisor}`) : console.log('Not divisible');
}

Division(30);