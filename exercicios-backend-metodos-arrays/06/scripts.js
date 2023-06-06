function encontraDono(usuarios, nome) {

    let guardaPet = 0;

    for (let i = 0; i < usuarios.length; i++) {
        guardaPet = usuarios[i].pets.indexOf(nome);

        if (guardaPet >= 0) {
            console.log(`O dono(a) do(a) ${nome} é o(a) ${usuarios[i].nome}`);
            break;
        }
    }

    if (guardaPet === -1) {
        console.log(`Que pena ${nome}, não encontramos seu dono(a)`);
    }
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

encontraDono(usuarios, "Reneata");