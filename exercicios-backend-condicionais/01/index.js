const jogada1 = "papel"
const jogada2 = "pedra"

//seu código aqui

if (jogada1 == jogada2 || jogada2 == jogada1) {
    console.log("EMPATE!");
} else if (jogada1 == "pedra" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log("pedra");
} else if (jogada1 == "papel" && jogada2 == "pedra" || jogada1 == "pedra" && jogada2 == "papel") {
    console.log("papel");
} else if (jogada1 == "tesoura" && jogada2 == "papel" || jogada1 == "papel" && jogada2 == "tesoura") {
    console.log("tesoura");
} else {
    console.log("Jogada inválida, tente novamente!");
}