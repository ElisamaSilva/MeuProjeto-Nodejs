module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
            
						{idCategoria:1, nome:"Moda"},
            {idCategoria:2, nome:" Beleza"},
            {idCategoria:3, nome:"Cama, Mesa e Banho"},
           	{idCategoria:4, nome:"Eletrodomésticos"},
            {idCategoria:5, nome:"Informática"},
            {idCategoria:6, nome:"Móveis"},
            {idCategoria:7, nome:"Games"},
            {idCategoria:8, nome:"Alimentos"},
           	{idCategoria:9, nome:"Bebês"},
            {idCategoria:10, nome:"Perfumaria "},

    
						
					]
				)				
			}
	}
};