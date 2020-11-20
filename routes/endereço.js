const rp = require('request-promise')
const req = require('request')
const bodyParser = require('body-parser')

module.exports = app => {

	app.get("/endereco", (req, res) => {
			Endereco.findAll({},(retorno)=>
							{res.json({endereco: retorno})});
	});

  app.get('/endereco/cep/:cep', (req, res) => {
		var cep = req.params.cep;	
		const getViaCep = {
            uri: 'https://viacep.com.br/ws/'+cep+'/json/',
            method: 'GET'            
        }
        
		rp(getViaCep).then(function (parsedBody) {
                res.send(parsedBody);
            }).catch(function (err) { 
                res.send("ERRO");
            });
	});

  const Endereco = app.models.endereco;
         
  var jsonParser = bodyParser.json()
	app.post("/endereco", jsonParser, function(req, res) {
		
 			var idUsuario = req.body.idUsuario;
      var cep = req.body.cep;
      var rua = req.body.rua;
      var numero = req.body.numero;
      var complemento = req.body.complemento;
      var bairro = req.body.bairro;
      var cidade = req.body.cidade;
      var estado = req.body.estado;

      console.log(req.body);
      
		 res.status(200).send('OK');
     
	});
};