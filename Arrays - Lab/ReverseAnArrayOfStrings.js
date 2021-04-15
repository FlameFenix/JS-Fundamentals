function ReverseArray(input) {
    let output = '';
    for (let index = input.length - 1; index >= 0 ; index--) {
        output += `${input[index]} `;
    }
    console.log(output);
}

ReverseArray(['a', 'b', 'c', 'd', 'e']);