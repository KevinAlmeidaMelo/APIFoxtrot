// const express = require('express');
// const server = express();
// const produtos = require('./src/data/produtos.json');
// const users = require('./src/data/users.json');
// let carrinho = require('./src/data/carrinho.json');
// server.use(express.json()) 

// server.get('/produtos', (req,res)  => {  
//     return res.json(produtos);
// });

// server.get('/produtos/:id', (req, res) => {
//   const {id} = req.params;

//   let produto = produtos.filter(produto => produto.id == id);
  
//   return res.json(produto);
// });
// server.post('/user',function(request,response){
//     return response.status(200)
// })
// server.get('/users', (req,res)  => {  
//     return res.json(users);
// });
// server.post('/carrinho', function(req,res){
//     const produto = req.body
//     carrinho.push(produto)
//     return res.status(200).json(carrinho)
//   })
//   server.get('/carrinho', function (req,res){
//     return res.status(200).json(carrinho)
//   })

// //  server.delete('/carrinho/id', function (req,res){
// //     const produtoId = req.params.id
// //     carrinho.delete(produtoId)
// //     return res.status(200).json(carrinho)
// //   })

// server.listen(3000, () =>{
//  console.log('Servidor esta funcionando!');
// });



const express = require('express');
const server = express();
const produtos = require('./src/data/produtos.json');
const users = require('./src/data/users.json');
let carrinho = [];
server.use(express.json()) 

server.get('/produtos', (req,res)  => {  
    return res.json(produtos);
});
server.post('/user',function(request,response){
    return response.status(200)
})
server.get('/users', (req,res)  => {  
    return res.json(users);
});
server.post('/carrinho', function(req,res){
    const produto = req.body
    carrinho.push(produto)
    return res.status(200).json(carrinho)
  })
  server.get('/carrinho', function (req,res){
    return res.status(200).json(carrinho)
  })

//  server.delete('/carrinho/id', function (req,res){
//     const produtoId = req.params.id
//     carrinho.delete(produtoId)
//     return res.status(200).json(carrinho)
//   })

server.listen(3000, () =>{
 console.log('Servidor esta funcionando!');
});