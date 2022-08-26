const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "jobs.visie.com.br",
    user: "matheusalbuquerque",
    password: "bWF0aGV1c2Fs",
    database: "matheusalbuquerque",
});

// app.get("/", (req, res) => {
//     let SQL = "INSERT INTO pessoas(`nome`,`rg`,`cpf`,`data_nascimento`,`data_admissao`) VALUES ('Albertoo Vieiraa','25.507.105-2','168.637.122-53','1997-07-01','2020-09-28')";

//     db.query(SQL, (err, result) => {
//         console.log(err);
//     });

// });

app.use(cors())
app.use(express.json())

app.post("/registro", (req, res) => {
    const { name } = req.body;
    const { rg } = req.body;
    const { cpf } = req.body;
    const { data_nasc } = req.body;
    const { data_admi } = req.body;
    const { funcao } = req.body;

    let SQL = "INSERT INTO pessoas(`nome`,`rg`,`cpf`,`data_nascimento`,`data_admissao`) VALUES (?,?,?,?,?)";
    
    db.query(SQL, [name, rg, cpf, data_nasc, data_admi, funcao], (err, result) => {
        console.log(err)
    })
});

app.get("/getPessoas", (req, res) => {
    let SQL = "SELECT * FROM pessoas ";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
    
})

app.put("/editar", (req, res) => {
    const {id} = req.body
    const { nome } = req.body;
    const { rg } = req.body;
    const { cpf } = req.body;
    const { data_nascimento } = req.body;
    const { data_admissao } = req.body;
    const { funcao } = req.body;

    let SQL = "UPDATE pessoas SET nome = ?, rg = ?, cpf = ?, data_nascimento = ?, data_admissao = ?, funcao = ? WHERE id_pessoa = ?";

    db.query(SQL,[nome, rg, cpf, data_nascimento, data_admissao, funcao, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
    console.log(req.body)
})

app.delete("/deletar/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM pessoas WHERE id_pessoa= ?"
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});
const port = 5000;
app.listen(port, () => {
    console.log('Rodando na porta 5000...');
});