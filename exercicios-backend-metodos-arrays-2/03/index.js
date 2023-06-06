const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const proibeBebida = (array) => {
    const validaArray = array.some((item) => {
        return item === "cerveja" || item === "vodka";
    });

    if (validaArray) {
        console.log("Revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    }
}

proibeBebida(palavras);