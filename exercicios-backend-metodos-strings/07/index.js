const email = "aluno@cubos.academy";

let validaArroba = email.includes("@");
let validaPonto = email.includes(".");

if (validaArroba && validaPonto) {

    for (let i = 0; i < email.length; i++) {
        if (email[0] === "." || email[email.length - 1] === ".") {
            console.log("E-mail inválido");
            break;
        } else {
            console.log("E-mail válido");
            break;
        }
    }
} else {
    console.log("E-mail inválido");
}