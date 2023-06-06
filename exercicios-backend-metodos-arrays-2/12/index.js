const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const pegaArray = (array, profissao) => {

    if (profissao === "Jornalista") {
        let filtraJornalista = array.filter((pessoa) => {
            return pessoa.idade > 30 && pessoa.profissao === "Jornalista";
        });
        console.log(filtraJornalista);

    } else if (profissao === "Programador") {

        let filtraProgramador = array.filter((pessoa) => {
            return pessoa.profissao === "Programador" && pessoa.idade > 20;
        })
        console.log(filtraProgramador);

    } else {
        let filtraIdade = array.filter((pessoa) => {
            return pessoa.idade <= 29;

        })
        console.log(filtraIdade); 
    }


}

pegaArray(pessoas);