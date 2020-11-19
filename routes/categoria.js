module.exports = app => {
	const Categoria = app.models.categoria;
	const Produto = app.models.produto;

  

	app.get("/categoria", (req, res) => {
			Categoria.findAll({},(retorno)=>
							{res.json({categoria: retorno})});
	});
 
  app.get("/categoria/:categoria", (req, res) => {
      var categoria = "xxx";
      var categoria = req.params.categoria;
      var listaProdutos = [];

			Categoria.findAll({},(retorno) =>
			{ 
        var retorno = JSON.parse (JSON.stringify (retorno));

        for (var e = 0; e < retorno.length; e++) {
          if (retorno[e].nome.toLowerCase() == categoria.toLowerCase()) {
            categoria = retorno[e].id;

            break;
          }
        }

      });

      Produto.findAll({},(retorno) =>
			{ 
        var retorno = JSON.parse(JSON.stringify(retorno));
        for (var e = 0; e < retorno.length; e++) {

          if (retorno[e].idCategoria == idCategoria) {
            listaProdutos.push (retorno[e]);
          }
        }

        res.json({categoria: listaProdutos})
      });
	});
};