const cpf = "12345678900";
const cnpj = "12345678234199";

let primeroCPF = cpf.slice(0, 3);
let segundoCPF = cpf.slice(3, 6);
let terceiroCPF = cpf.slice(6, 9);
let quartoCPF = cpf.slice(9);

let primeroCNPJ = cnpj.slice(0, 2);
let segundoCNPJ = cnpj.slice(2, 5);
let terceiroCNPJ = cnpj.slice(5, 8);
let quartoCNPJ = cnpj.slice(8, 12);
let quintoCNPJ = cnpj.slice(12);

if (cpf.length > 11 || cpf.length < 11) {
    console.log("CPF Inválido");
} else {
    console.log(`${primeroCPF}.${segundoCPF}.${terceiroCPF}-${quartoCPF}`);
}

if (cnpj.length > 14 || cnpj.length < 14) {
    console.log("CNPJ Inválido");
} else {
    console.log(`${primeroCNPJ}.${segundoCNPJ}.${terceiroCNPJ}/${quartoCNPJ}-${quintoCNPJ}`);
}