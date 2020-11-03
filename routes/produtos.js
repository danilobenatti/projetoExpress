const express = require('express');
/**
 * Para importar o produtoController.js
 */
const produtosController = require('../controllers/produtosController');

const router = express.Router();

// Rota raiz dos produtos / início
router.get('/', (req, res) => {
    // código
    res.send('Lista todos os produtos!');
});

router.get('/produto/:id?', (req, res) => {
    let {id} = req.params; // usando a desestruturação
    res.send('Escolheu o produto '+ id);
    console.log('Escolheu o produto ',id);
});

// Rota que exibe o detalhe de um produto
router.get('/detalhes/:id', (req, res) => {
    // código
    let {id} = req.params;
    res.send('Detalhes do produto com id: '+ id);
});

// router.get('/criar', function (req, res) {res.send('Criando um produto.')});
/**
 * Após utilizar o controller 'criarProduto'
 * passa a apontar para o método da forma abaixo:
 */
router.get('/criar', produtosController.criarProduto);

//router.get('/deletar/:id', function (req, res) {
//    let {id} = req.params;
//    res.send('Deletando o produto: ',id);
//});

/**
 * Após utilizar o controller 'deletarProduto'
 * passa a apontar para o método da forma abaixo:
 */
router.get('/deletar/:id', produtosController.deletarProduto);

/**
 * Na última linha do arquivo exportamos todo
 * o conteúdo do router para ele ficar visível
 */
module.exports = router;