const palavras = ["livro", "sol", "carro", "caneta"];

const limitaCaracteres = (array) => {
    const validaArray = array.every((palavra) => {
        return palavra.length <= 5
    });

    if (validaArray) {
        console.log("array validado");
    } else {
        console.log("existe palavra inválida");
    }
}

limitaCaracteres(palavras);
