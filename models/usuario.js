module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
					[
						{usuario:1, nome:"xxx"},
            {usuario:1, nascimento:"xxx"},
            {usuario:1, email:"xxx"},
            {usuario:1, login:"xxx"},
            {usuario:1, senha:"xxx"},

            {usuario:2, nome:"xxx"},
            {usuario:2, nascimento:"xxx"},
            {usuario:2, email:"xxx"},
            {usuario:2, login:"xxx"},
            {usuario:2, senha:"xxx"},
    
						
					]
				)				
			}
	}
};