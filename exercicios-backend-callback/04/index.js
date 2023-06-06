
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;


let tempoParaAlarmeEmSegundos = 10;
let tempoAlarmadoEmSegundos = 5;
let tempoEsgotado = false;

const alarme = () => {
  let i = 0;

  console.log(`Timer iniciado, disparando alarme em     
  ${tempoParaAlarmeEmSegundos} segundos`);
  
  setTimeout(() => {
    tempoEsgotado = true;
    if(tempoEsgotado) {
      const contador = () => {
      console.log("Beep beep!")
      i++

      if(i >= tempoAlarmadoEmSegundos) {
      clearInterval(id);
    }
  }
      const id = setInterval(contador, 1000);
    }
    
  }, tempoParaAlarmeEmSegundos * 1000);  
}

alarme();