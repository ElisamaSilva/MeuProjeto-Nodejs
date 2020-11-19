const rp = require('request-promise')
const req = require('request')
const bodyParser = require('body-parser')

module.exports = app => {

	app.get("/endereço", (req, res) => {
			Endereco.findAll({},(retorno)=>
							{res.json({endereço: retorno})});
	});

  app.get('/endereço/cep/:cep', (req, res) => {
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
  app.get("/endereco", (req, res) => {
    res.status(200).send('OK')
    
  });
         
  var jsonParser = bodyParser.json()
	app.post("/endereços", jsonParser, function(req, res) {
		
 			var usuario = req.body.usuario;
      var endereço = req.body.endereço
      var cep = req.body.cep;
      var rua = req.body.rua;
      var numero = req.body.numero;
      var complemento = req.body.complemento;
      var bairro = req.body.bairro;
      var cidade = req.body.cidade;
      var estado = req.body.estado;

      console.log(req.body);
      
			res.json(
				{
					usuarioRecebido: usuario,
          enderecoRecebido: endereco,
					cepRecebido: cep,
          ruaRecebido: rua,
          numeroRecebido: numero,
          complementoRecebido: complemento,
          bairroRecebido: bairro,
          cidadeRecebido: cidade,
          estadoRecebido: estado,
				}
			)
	});
};