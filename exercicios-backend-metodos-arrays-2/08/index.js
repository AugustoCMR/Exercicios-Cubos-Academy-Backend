const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const pegaArray = (array) => {

    let i = 0;

    const novoArray = array.map((fruta) => {
        console.log(`${i++} - ${fruta[0].toUpperCase()}${fruta.slice(1).toLowerCase()}`);
    });


}

pegaArray(frutas);