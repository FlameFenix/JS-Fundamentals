function party(input) {
    let peoples = [];
    let currentElement = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        currentElement = element.split(' ');
        let name = currentElement[0];
        if (currentElement.length == 3) {
            if (peoples.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                peoples.push(name);
            }
        } else if (currentElement.length == 4) {
            if(peoples.includes(name)) {
                let index = peoples.indexOf(name);
                peoples.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }

    for (const person of peoples) {
        console.log(person);
    }
}

party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);