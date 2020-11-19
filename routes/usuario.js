const bodyParser = require('body-parser')
module.exports = app => {
	const Usuario = app.models.usuario;
	
	app.get("/usuario", (req, res) => {
			  Usuario.findAll({},(retorno)=>
					{res.json({usuario: retorno})});
	});

	var jsonParser = bodyParser.json()
	app.post("/usuario", jsonParser, function(req, res) {
		
			var usuario = req.body.usuario
 			var nome = req.body.nome
      var nascimento = req.body.nascimento
      var email = req.body.email
      var login = req.body.login
      var senha = req.body.senha;

			res.json(
				{
					usuarioRecebido: usuario,
          nomeRecebido : nome,
          nascimentoRecebido : nascimento,
          emailRecebido : email,
          loginRecebido : login,
          senhaRecebido : senha,

					
        }
			)
	});
};