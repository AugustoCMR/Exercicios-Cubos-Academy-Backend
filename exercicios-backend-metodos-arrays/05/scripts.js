function agendarPaciente(pacientes, nome) {

    pacientes.splice(pacientes.length, 0, nome);
    let textoFormatado = pacientes.join(", ");

    return textoFormatado;
}

function atenderPaciente(pacientes, nome) {
    pacientes.splice(0, 1);

    let textoFormatado = pacientes.join(", ");

    return textoFormatado;
}

function cancelarAtendimento(pacientes, nome) {
    let pegaPaciente = pacientes.indexOf(nome);

    pacientes.splice(pegaPaciente, 1);

    let textoFormatado = pacientes.join(", ");

    return textoFormatado;
}


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log(agendarPaciente(pacientes, "Augusto"));
console.log(atenderPaciente(pacientes));
console.log(cancelarAtendimento(pacientes, "Pedro"));