const diaDaPromocao = new Date(2023, 4, 28, 8);
const fimDaPromocao = +diaDaPromocao + (1000 * 60 * 60 * 24);

console.log(fimDaPromocao)


const diaSolicitado = new Date(2023, 4, 28, 8);

const momentoSolicitado = +diaSolicitado

console.log(momentoSolicitado);

if(momentoSolicitado < fimDaPromocao) {
    return console.log(true);
} else {
    return console.log(false);
}

