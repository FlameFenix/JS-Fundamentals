function arrayManipulator(input) {

    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        let number = Number(commands[1]);
        let index = 0;
        switch (command) {
            case 'Add':
                arr.push(number);
                break;
            case 'Remove':
                index = arr.indexOf(number);
                arr.slice(index);
                break;
            case 'RemoveAt':
                arr.slice(number);
                break;
            case 'Insert':
                index = commands[2];
                arr.slice(index, 0, number);
                break;

            default:
                break;
        }
    }
    console.log(arr.join(' '));
}

arrayManipulator(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)