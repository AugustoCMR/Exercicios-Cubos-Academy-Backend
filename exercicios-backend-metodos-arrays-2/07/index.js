const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const pegaArray = (array, cep) => {
    const buscaCEP = array.find((endereco) => {
        return endereco.cep === cep
    })

    const pegaRua = buscaCEP.rua;

    console.log(pegaRua);
}

pegaArray(endereços, 00222444);