function Triange(input){
    
    for (let index = 1; index <= input; index++) {
        let row = '';
        for (let secondIndex = 1; secondIndex <= index; secondIndex++) {
            row += `${index} `;
        }
        console.log(row);
    }
}

Triange(5);