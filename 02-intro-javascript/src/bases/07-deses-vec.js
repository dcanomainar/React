const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ ,,c3 ] = characters;

console.log(c3);

const getCharacters = () => {
    return ['ABC', 123];
}

const [letters, numbers] = getCharacters();

console.log(letters, numbers);

const useState = (value) => {
    return [value, () => {console.log('Hello World')}];
}

const  [name, setName] = useState('Goku');

console.log(name);

setName();