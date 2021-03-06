const Sequelize = require('sequelize');

//Importar para la conexion de la bse de datos
const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },

    correo: {
        type: Sequelize.STRING
    },

    mensaje: {
        type: Sequelize.STRING
    },
});

module.exports = Testimonial