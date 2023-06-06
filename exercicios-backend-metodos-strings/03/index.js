const texto = "Aprenda programar do zero na Cubos Academy";

function formataUrl(texto) {
    let textoMinusculo = texto.toLowerCase();

    while (textoMinusculo !== textoMinusculo.replace(" ", "-")) {
        textoMinusculo = textoMinusculo.replace(" ", "-");
    }

    return textoMinusculo;
}

console.log(formataUrl(texto));