module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{ usuario:1, endereco:1, produto: [
              
              {
                pedido: 1, preco: 300, quantidade: 3
              },

              {
                pedido: 2, preco: 900, quantidade: 1
              },

              {
                pedido: 3, preco: 200, quantidade: 5
              },

            ],

            frete:200,
            total: 2.800,
            }
					]
				
        [
						{ usuario:2, endereco:1, produto: [
              
              {
                pedido: 1, preco: 500, quantidade: 2
              },

              {
                pedido: 2, preco: 2.000, quantidade: 1
              },

              {
                pedido: 3, preco: 100, quantidade: 9
              },

            ],

            frete:400,
            total: 3.900,
            }
					]
        
        )				
			}
	}
};