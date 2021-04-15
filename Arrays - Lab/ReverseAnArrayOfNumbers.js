function ReverseArray(n, input) {
    let nums = '';
    for (let index = n - 1; index >= 0; index--) {
        nums += `${input[index]} `;
    }
    console.log(nums);
}

ReverseArray(2, [66, 43, 75, 89, 47]);