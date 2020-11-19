const bodyParser = require('body-parser');

module.exports = app => {
	const Pedido = app.models.pedido;

	app.get("/pedido", (req, res) => {
			Pedido.findAll({},(retorno)=>
							{res.json({pedido: retorno})});
	});

  var jsonParser = bodyParser.json();

	app.post("/pedido", function(req, res) {
			var pedido = req.body.pedido;
 			var usuario = req.body.usuario;
      var endereço = req.body.endereço;
      var produto = req.body.produto;
      var frete = req.body.frete;
      var total = req.body.total;

      console.log(req.body)
			res.json(
				{
					pedidoRecebido: pedido,
					usuarioRecebido: usuario,
          endereçoRecebido: endereço,
          produtoRecebido: produto,
          freteRecebido: frete,
          totalRecebido: total,
				}
			)
	});
};