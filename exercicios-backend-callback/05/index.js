let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 3;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;
let tempoEsgotado = false;

let contador = 0;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`);

const idTimer = setInterval(() => {
  contador++

  if(contador >= tempoParaAlarmarEmSegundos && contador < (tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos)) {
    console.log("Beep beep!")
  } else if(contador >= tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos) {
    if(numeroDeSonecas === 0) {
      console.log("Fim do Timer!");
      clearInterval(idTimer);
    } else {
      console.log(`Sonecas ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`)
      tempoParaAlarmarEmSegundos += tempoSonecaEmSegundos + tempoAlarmandoEmSegundos;
      numeroDeSonecas--;
    }
  }  
}, 1000);