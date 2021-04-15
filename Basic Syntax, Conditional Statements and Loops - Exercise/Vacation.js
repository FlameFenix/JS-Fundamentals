function Vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let people = Number(groupOfPeople);
    let type = typeOfGroup;
    let day = dayOfWeek;
    let price = 0;
    
    if(type == 'Business' && people >= 100) {
        people -= 10;
    }

    if(day == 'Friday') {
        if(type == 'Students') {
            price = 8.45 * people;
        } else if(type == 'Business') {
            price = 10.90 * people;
        } else if(type == 'Regular') {
            price = 15.0 * people;
        }
    } else if(day == 'Saturday') {
        if(type == 'Students') {
            price += 9.80 * people;
        } else if(type == 'Business') {
            price += 15.60 * people;
        } else if(type == 'Regular') {
            price += 20.0 * people;
        }
    } else if(day == 'Sunday') {
        if(type == 'Students') {
            price += 10.46 * people;
        } else if(type == 'Business') {
            price += 16.0 * people;
        } else if(type == 'Regular') {
            price += 22.50 * people;
        }
    }

    if(type == 'Students' && people >= 30) {
        price *= 0.85;
    }
    if(type == 'Regular' && people >= 10 && people <= 20) {
        price *= 0.95;
    } 

    console.log(`Total price: ${price.toFixed(2)}`);
}

Vacation(40,
    "Regular",
    "Saturday"
    )