function encontraCarro(carros, int) {

    let procuraCarro = carros.slice(int, int + 3);
    let formataTexto = procuraCarro.join(" - ");
    console.log(formataTexto);
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

encontraCarro(nomes, posicao);