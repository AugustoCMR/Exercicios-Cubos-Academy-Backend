const tabuada = (numero, callback) => {
    let mostraTabuada = "";

    for(let i = 0; i <= 10; i++) {
        mostraTabuada += `${numero} x ${i} = ${numero * i} \n`
    }

    callback(mostraTabuada);
}

tabuada(5, (resultado) => {
    console.log(resultado);
})