const Sequelize = require("sequelize");
const db = require('./db');

const User = db.define('pessoas', {
    id_pessoa: {
        type: Sequelize.INTEGER (255),
        autoIncrement: true,
        allowNull: false,
        primaryKey:"true"

    },
    nome: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    rg: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    cpf: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    data_nscimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_admissao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    funcao: {
        type: Sequelize.CHAR(100),
        allowNull: true
    }
})

module.exports = User