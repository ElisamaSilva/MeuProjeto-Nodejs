module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{ idUsuario:1,
              idEndereco:1,
              produto: [
              
              {
                idProduto: 1, preco: 300, quantidade: 3
              },

              {
                idProduto: 2, preco: 900, quantidade: 1
              },

              {
                idProduto: 3, preco: 200, quantidade: 5
              }],

            frete: 200,
            total: 3.000,
            }
					]
				
        [
						{ idUsuario:2, 
              idEndereco:2,  
              produto: [
              
              {
                idProduto: 1, preco: 500, quantidade: 2
              },

              {
               idProduto: 2, preco: 2.000, quantidade: 1
              },

              {
                idProduto: 3, preco: 100, quantidade: 9
              }],

            frete: 400,
            total: 4.300,
            }
          ]
        )				
			}
	}
};