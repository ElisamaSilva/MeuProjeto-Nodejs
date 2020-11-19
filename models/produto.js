module.exports = app => {
return{
  findAll: (params, callback) => {
    return callback(
      [
        
        {idCategoria:1, produto: "Blusa T-Shirt"},
        {idCategoria:2, produto: "Protetor Solar"},
        {idCategoria:3, produto: "Toalha"},
        {idCategoria:4, produto: "Geladeira"},
        {idCategoria:5, produto: "Macbook"},
        {idCategoria:6, produto: "Sofá"},
        {idCategoria:7, produto: "Playstation"},
        {idCategoria:8, produto: "Feijão"},
        {idCategoria:9, produto: "Lenço Umedecido"},
        {idCategoria:10, produto: "Lily- O Boticario"},

      ]
    )
  }
}

};