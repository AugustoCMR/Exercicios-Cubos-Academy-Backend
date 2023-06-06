const inicioDaPromocao = new Date(2023,4,25, 12);
const promocaoSolicitada = new Date(2023,4,25, 12);

const limitePromocao = +inicioDaPromocao + (1000 * 60 * 60 * 24 * 30);

if(promocaoSolicitada > limitePromocao || inicioDaPromocao > promocaoSolicitada) {
    console.log(false);
} else {
    console.log(true);
}

