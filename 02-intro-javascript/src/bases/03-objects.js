const person = {
    name: 'Name',
    surname: 'Surname',
    age: 40,
    direction: {
        city: 'City',
        zip: 1112312,
        lat: 14.3232,
        lng: 34.9232
    }
}

console.log({person});

const person2 = {...person};
person2.name = 'Name2';

console.log({person2});