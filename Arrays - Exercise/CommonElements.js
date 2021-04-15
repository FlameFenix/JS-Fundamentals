function Elements(firstArray, secondArray) {
    for (const element of firstArray) {

        let isExist = secondArray.includes(element);

        if (isExist) {
            console.log(element);
        }

    }
}

Elements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);