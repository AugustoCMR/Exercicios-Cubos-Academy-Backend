const nomeArquivo = 'Foto da Familia.jpg';

let ponto = nomeArquivo.indexOf(".");

let identificaArquivo = nomeArquivo.slice(ponto);

if (identificaArquivo === ".jpg" || identificaArquivo === ".jpeg" || identificaArquivo === ".gif" || identificaArquivo === ".png") {
    console.log("Arquivo válido");

} else {
    console.log("Arquivo inválido");

}


