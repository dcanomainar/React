const person = {
    name: 'Name',
    age: 45,
    key: 'Tronman'
}

const getPerson = (user) => {
    const { name: name2, age, key } = user;

    console.log(name2, age, key);
}

const getPerson2 = ({name}) => {
    console.log(name);
}

const getPerson3 = ({name, age, key, rango = 'Captain'}) => {
    return {
        key: key,
        age: age,
        latlng: {
            lat: 14.1313,
            lng: -12.2332
        }
    }
}

getPerson(person);

getPerson2(person);

const {key, age, latlng:{lat, lng}} = getPerson3(person);

console.log(key, age);

console.log(lat, lng);