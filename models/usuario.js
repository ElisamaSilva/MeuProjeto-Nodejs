module.exports = app => {
	return {
			findAll: (params,callback) => {
				return callback(
          
					[ //Inico da Lista
					 { idusuario:1,
             nome:"Elisa",
             nascimento:"25/01/1996",
             email:"ealvesns@gmail.com",
             login:"Elisa Silva",
             senha:"202020"
             
             }, //Fim da Lista

           { idusuario:2,
             nome:"Elisama",
             nascimento:"27/11/1999",
             email:"ealvesns25@gmail.com",
             login:"Elisama Silva",
             senha:"1234567"
           }
					] //Fim
				)				
			}
	}
};