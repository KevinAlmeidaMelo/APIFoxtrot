const express = require('express');
const app = express();

let carrinho = [];

app.get('/carrinho', (req, res) => {
  const item = req.query.item;
  console.log(`Adicionando item ao carrinho: ${item}`);

  carrinho.push(item);

  res.json({ message: `Item adicionado ao carrinho: ${item}` });
});
app.post('/carrinho', function(req,res){
  const produto = req.body
  carrinho.push(produto) 
  return res.status(200).json(carrinho)
})
app.listen(3000, () => {
  console.log('API está em execução em http://localhost:3000');
});
