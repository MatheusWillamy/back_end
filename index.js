const express = require('express');
const app = express();
var path = require('path');

const port = 5000;
app.listen(port, () => {
    console.log('Rodando na porta 5000...');
})