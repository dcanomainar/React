import {getHeroeById} from './bases/08-import-export';

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(4);
//         resolve(heroe);
//     }, 2000);
// });

// promise.then((heroe) => {
//     console.log(heroe);
// }).catch((err) => console.warn(err));

// promise.finally(() => {

// });

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe === undefined)
                reject('Couldn\'t find heroe');
            else
                resolve(heroe);
        }, 2000);
    });
};

getHeroeByIdAsync(4).then(console.log).catch(console.warn);