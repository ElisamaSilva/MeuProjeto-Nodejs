module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
            
						{categoria:1, nome:"Moda"},
            {categoria:2, nome:" Beleza"},
            {categoria:3, nome:"Cama, Mesa e Banho"},
           	{categoria:4, nome:"Eletrodomésticos"},
            {categoria:5, nome:"Informática"},
            {categoria:6, nome:"Móveis"},
            {categoria:7, nome:"Games"},
            {categoria:8, nome:"Alimentos"},
           	{categoria:9, nome:"Bebês"},
            {categoria:10, nome:"Perfumaria "},

    
						
					]
				)				
			}
	}
};