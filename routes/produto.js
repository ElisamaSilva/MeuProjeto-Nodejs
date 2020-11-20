const bodyParser = require('body-parser')
module.exports = app => {
	const Produto = app.models.produto;
	
	app.get("/produto", (req, res) => {
			Produto.findAll({},(retorno)=>
							{res.json({produto: retorno})});
	});
 
  app.get("/produto/:produto", (req, res) => {
      var nome = req.params.nome;
      var produtosLista = [];
   
      Produto.findAll({},(retorno) =>
			{ 
        var retorno = JSON.parse(JSON.stringify(retorno));
        for (var e = 0; e < retorno.length; e++) {

          if (retorno[e].nome.toLowerCase().includes(nome.toLowerCase())) {
            produtosLista.push(retorno[e].idProduto);
          }

        }

        res.json({produto: produtosLista})
      });
	});
};