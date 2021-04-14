function Month(number) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    if(number >= 1 && number <= 12){
        let time = new Date(`${Number(number)}/10/2009`);
        console.log(monthNames[time.getMonth()]);
    } else {
        console.log(`Error!`);
    }
    
}

Month(6);