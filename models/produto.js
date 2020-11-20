module.exports = app => {
return{
  findAll: (params, callback) => {
    return callback(
      [
        
        {idProduto:1, idCategoria:1, nome: "Blusa T-Shirt"},
        {idProduto:2, idCategoria:2, nome: "Protetor Solar"},
        {idProduto:3, idCategoria:3, nome: "Toalha"},
        {idProduto:4, idCategoria:4, nome: "Geladeira"},
        {idProduto:5, idCategoria:5, nome: "Macbook"},
        {idProduto:6, idCategoria:6, nome: "Sofá"},
        {idProduto:7, idCategoria:7, nome: "Playstation"},
        {idProduto:8, idCategoria:8, nome: "Feijão"},
        {idProduto:9, idCategoria:9, nome: "Lenço Umedecido"},
        {idProduto:10, idCategoria:10, nome: "Lily- O Boticario"},

      ]
    )
  }
}

};