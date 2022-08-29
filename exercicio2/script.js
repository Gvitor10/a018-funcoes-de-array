let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// funçao numeros multiplicados

function multiplicacao(array){
    const triplos = array.map((value) => {return value * 3});
    console.log(triplos);
}
multiplicacao(arrayNumbers);

// funçao numeros divididos

function divisao(array){
    const metades = array.map((value) => {return value / 2});
    console.log(metades);
}
divisao(arrayNumbers);