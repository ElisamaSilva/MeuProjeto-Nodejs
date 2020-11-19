module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
            
						{cep:"xxx", usuario:1},
            {rua:"xxx", usuario:1},
 					  {numero:"xxx", usuario:1},
            {bairro:"xxx", usuario:1},
            {cidade:"xxx", usuario:1},
            {estado:"xxx", usuario:1},
            {complemento:"xxx", usuario:1},

            {cep:"xxx", usuario:2},
            {rua:"xxx", usuario:2},
 					  {numero:"xxx", usuario:2},
            {bairro:"xxx", usuario:2},
            {cidade:"xxx", usuario:2},
            {estado:"xxx", usuario:2},
            {complemento:"xxx", usuario:2},

					]
				)				
			}
	}
};