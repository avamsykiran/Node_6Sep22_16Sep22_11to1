/*function next(){
    var seed=100;
    return ++seed;
}*/

/*
seed=100;

function next(){
    return ++seed;
}

//seed is not protected, one can reset the seed any time
seed=7
*/

function nextFactory(){
    var seed = 100;

    return function(){
        return ++seed;
    }
}

const next = nextFactory();

console.log(next())
console.log(next())
console.log(next())
console.log(next())
console.log(next())

