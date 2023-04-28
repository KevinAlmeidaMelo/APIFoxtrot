const express = require('express');
const server = express();
const produtos = require('./src/data/produtos.json');
const users = require('./src/data/users.json');


server.get('/produtos', (req,res)  => {  
    return res.json(produtos);
});

server.get('/users', (req,res)  => {  
    return res.json(users);
});


server.listen(3000, () =>{
 console.log('Servidor esta funcionando!');
});