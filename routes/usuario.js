const bodyParser = require('body-parser')
module.exports = app => {
	const Usuario = app.models.usuario;

	app.get("/usuario", (req, res) => {
			  Usuario.findAll({},(retorno)=>
					{res.json({usuario: retorno})});
	});

	var jsonParser = bodyParser.json()
	app.post("/usuario", jsonParser, function(req, res) {
		
			var idUsuario = req.body.idUsuario
 			var nome = req.body.nome
      var nascimento = req.body.nascimento
      var email = req.body.email
      var login = req.body.login
      var senha = req.body.senha;

			 console.log(req.body);
      
		 res.status(200).send('OK');
	});
};