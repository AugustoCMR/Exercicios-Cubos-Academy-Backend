const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const filtraCidade = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

console.log(filtraCidade.join(", "));