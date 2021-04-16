function listOfProducts(input) {
    input = input.sort();
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        console.log(`${i + 1}.${element}`)
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])