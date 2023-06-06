const comentario = "Esse covid é muito perigoso!";

let modificaComentario = comentario.toLowerCase();

if (modificaComentario.includes("covid") || modificaComentario.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado");
}
