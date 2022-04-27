const vector = [1,2,3,4];
// vector.push(1);
// vector.push(2);
// vector.push(3);
// vector.push(4);

let vector2 = [...vector, 5];

const vector3 = vector2.map((value) => {
    return value*2;
});

console.log(vector);
console.log(vector2);
console.log(vector3);