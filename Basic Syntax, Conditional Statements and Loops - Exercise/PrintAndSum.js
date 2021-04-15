function Print(start, end) {
    let sum = 0;
    let nums = '';

    for (let index = start; index <= end; index++) {
        nums += `${index} `;
        sum += index;
    } 
    console.log(nums);
    console.log(`Sum: ${sum}`);

}

Print(5,10);