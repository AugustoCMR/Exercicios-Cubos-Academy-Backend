const tabuada = (numeros, callback) => {
    let mostraTabuada = "";

    for(let numero of numeros) {

        for(let i = 0; i <= 10; i++) {
            mostraTabuada += `${numero} x ${i} = ${numero * i} \n`
        }

         mostraTabuada += "---------------------\n\n"
    }

    callback(mostraTabuada);
}

tabuada([1, 5, 2], (resultado) => {
    console.log(resultado);
})  