module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(

					[  //inicio da lista

					{ idEndereco:1,
            cep:"66017-080",
            rua:"Carlos Gomes",
 					  numero:"138",
            bairro:"Campina",
            cidade:"Belem",
            estado:"Pará",
            complemento:"Ed. José Peixoto"

           }, //Fim da Lista

          { idEndereco:2,
            cep:"68600-00",
            rua:"Visconde de Sousa Franco",
 					  numero:"1724",
            bairro:"Centro",
            cidade:"Bragança",
            estado:"Pará",
            complemento:"Casarão"

            }

					]//Fim
				)				
			}
	}
};