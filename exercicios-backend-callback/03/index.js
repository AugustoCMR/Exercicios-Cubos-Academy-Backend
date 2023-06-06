const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let duracao = (10 / jogadores.length) * 1000;

const imprimiJogador = () => {
  let i = 0;
  
  let jogador = () => {
    console.log(jogadores[i]);
    i++

    if(i >= jogadores.length) {
    console.log("A rodada terminou!")
    clearInterval(id)
    }
  };
  
  const id = setInterval(jogador, duracao)
}

imprimiJogador();