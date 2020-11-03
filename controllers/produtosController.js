const ProdutosController = {
    criarProduto: (req,res) => {
        res.send('Criando um produto');
    },
    deletarProduto: (req,res) => {
        let {id} = req.params;
        res.send('Deletando o produto: '+ id);
    }
}

module.exports = ProdutosController;