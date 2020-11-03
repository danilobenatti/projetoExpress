/**
 * npm init -y
 * npm install express --save
 * npm install nodemon -g // instala globalmente o nodemon
 */
const express = require('express');

const app = express();
// console.log(app);

/**
 * Trabalhando com rotas, implementação do módulo
 * "rotasProduto" que é uma rota.
 */
const rotasProdutos = require('./routes/produtos');

// criando o servidor
app.listen(3030, 'localhost', () => {
    console.log('Servidor Rodando na porta 3030!');
});

// criando um exemplo de rota
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
app.get('/contatos', function (req, res) {
    res.send(
        [
            {
                id: 1,
                nome: 'João',
                idade: 23
            },
            {
                id: 2,
                nome: 'Silva',
                idade: 45
            }
        ]);
});

// criando uma rota dinâmica/parametrizada
/**
 * com '?' no final do parâmetro indicamos que o
 * mesmo é opcional. Ex.: ...utos/:id?
 app.get('/produtos/:id?', (req, res) => {
     // recuperando o valor de um parâmetro passado pela URL
     // let idProduto = req.params.id;
     let {id} = req.params; // usando a desestruturação
     res.send('Escolheu o produto '+ id);
     console.log('Escolheu o produto ',id);
 });
 */
/**
 * método use() - Por último, para completar o uso
 * de rotasutilizamos o método use() informado 1º
 * o nome do recurso "/produtos", 2º nome da constante
 * que armazena o módulo do recurso, no caso 'rotasProdutos'
 */
app.use('/produtos', rotasProdutos);