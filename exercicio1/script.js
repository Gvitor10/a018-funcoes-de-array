const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Funçao A - CAIXA ALTA

function caixaAlta(object){
    let newObject = {};

    for (let i in object){
        newObject[i] = object[i].toUpperCase();
    }
    return newObject;
}

// Funçao B - Texto corrido

function textoCorrido(object){
    let textCorrido = '';

    for (let i in object){
        textCorrido = textCorrido + ' ' + object[i];
    }
    return textCorrido;
}

// Funçao C - callback

function imprimir(object, callback){
    const retorno = callback(object);
    console.log(retorno);
}

imprimir(objeto, caixaAlta);
imprimir(objeto, textoCorrido);