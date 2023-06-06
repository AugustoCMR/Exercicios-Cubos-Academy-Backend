function divisaoDeGrupo(nomes, int) {

    let grupo1 = nomes.splice(0, int);
    let grupoFormatado = grupo1.join(", ");

    if (grupo1.length === int) {
        let grupo2 = nomes.slice();
        let grupoFormatado2 = grupo2.join(", ");
        console.log(`Grupo 1: ${grupoFormatado} \nGrupo 2: ${grupoFormatado2}`);
    } else {
        console.log(`Grupo 1: ${grupoFormatado}`);
    }


}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Paulo', 'Augusto', 'Renata'];

const tamanhoDoGrupo = 4;

divisaoDeGrupo(nomes, tamanhoDoGrupo);