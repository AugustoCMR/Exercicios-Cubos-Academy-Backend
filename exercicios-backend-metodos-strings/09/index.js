const nome = 'Augusto Carneiro Machado Ribeiro';

function nickname(nome) {
    let separaNome = nome.split(" ");
    let limitaNome = "";

    for (let item of separaNome) {
        limitaNome = item.slice(0, 13);
    }

    console.log(`@${limitaNome.toLowerCase()}`);
}

nickname(nome);