const bodyParser = require ('body-parser')
module.exports = app => {
	const Categoria = app.models.categoria;

	app.get("/categoria", (req, res) => {
			Categoria.findAll({},(retorno)=>
							{res.json({categoria: retorno})});
	});
 
  app.get("/categoria/:nome", (req, res) => {
      var nome = req.params.nome;
      var listaCategoria = [];

			Categoria.findAll({},(retorno) =>
			{ 
        var retorno = JSON.parse (JSON.stringify (retorno));
        for (var e = 0; e < retorno.length; e++) {
          if (retorno[e].nome.toLowerCase().includes (nome.toLowerCase())){
            listaCategoria.push (retorno[e].idCategoria);

          }
        }

        res.json({categoria: listacategoria})

      });
      });

};