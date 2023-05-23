const express = require('express');
const app = express();

let carrinho = [];

app.get('/carrinho', (req, res) => {
  res.status(200).json(carrinho);
});

app.post('/carrinho', (req, res) => {
  const produto = req.body;
  carrinho.push(produto);
  res.status(200).json(carrinho);
});

// app.delete('/carrinho/:id/:id', (req, res) =>{
//   const produtoId = req.params.id;
//   const produtoIndex = carrinho.findIndex(produto => produto.id === produtoId);
//   if (produtoIndex !== -1 ){
//     carrinho.splice(produtoIndex, 1);
//     res.status(200).json({mensage:'O produto foi removido'});
//   }
//   else {res.status(404).json({mensage:'Produto não encontrado'});}})

app.listen(3000, () => {
  console.log('API está em execução em http://localhost:3000');
});
