const numeroCartao = '1111222233334444';

let meioDoCartao = numeroCartao.slice(4, 12)
let censuraCartao = "********"

let censura = numeroCartao.replace(meioDoCartao, censuraCartao);

console.log(censura);

