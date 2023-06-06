
const somar = (req, res) => {
  const { num1, num2 } = req.query;

  if(num1 && num2) {

    const soma = Number(num1) + Number(num2)

    res.send(String(soma));
  }
};

const subtrair = (req, res) => {
    const {num1, num2} = req.query;

    if(num1 && num2) {
        const subtrai = Number(num1) - Number(num2);

        res.send(String(subtrai));
    }
}

const multiplicar = (req, res) => {
    const {num1, num2} = req.query;

    if(num1 && num2) {
        const multiplica = Number(num1) * Number(num2);

        res.send(String(multiplica));
    }
}

const dividir = (req, res) => {
    const {num1, num2} = req.query;

    if(num1 && num2) {
        const divisao = Number(num1) / Number(num2);

        res.send(String(divisao));
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
