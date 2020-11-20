const bodyParser = require('body-parser');

module.exports = app => {
	const Pedido = app.models.pedido;

	app.get("/pedido", (req, res) => {
			Pedido.findAll({},(retorno)=>
							{res.json({pedido: retorno})});
	});

  var jsonParser = bodyParser.json();

	app.post("/pedido", function(req, res) {
 			var idUsuario = req.body.idUsuario;
      var idEndereco = req.body.idEndereco;
      var produto = req.body.produto;
      var total = req.body.total;

      console.log(req.body)
			res.json(
				{
					idUsuarioRecebido: idUsuario,
          idEnderecoRecebido: idEndereco,
          produtoRecebido: produto,
          totalRecebido: total,
				}
			)
	});
};