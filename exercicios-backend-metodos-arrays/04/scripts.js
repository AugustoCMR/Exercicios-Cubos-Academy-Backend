function listaPacientes(pacientes, operacao, nome) {

    let listaFormatada = "";

    if (operacao === "agendar") {
        pacientes.push(nome);
        listaFormatada = pacientes.join(", ");
        console.log(listaFormatada);

    } else {
        pacientes.shift(nome);
        listaFormatada = pacientes.join(", ");
        console.log(listaFormatada);
    }
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

listaPacientes(pacientes, "agendar", "Augusto");