const express = require('express');
const router = express.Router();

//Importar los Controllers
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

//se muestra el del home/ multiple query ojo 
module.exports = function() {
    router.get('/', homeController.consultasHomepage);

    //vista de nosotros desde el controllers
    router.get('/nosotros', nosotrosController.infoNosotros);

    //vista de viajes desde el controller
    router.get('/viajes', viajesController.mostrarViajes);

    // res.send(req.params.id) => me ayuda a traer el id de cada viaje
    router.get('/viajes/:id', viajesController.mostrarViaje);

    //obtener los testimoniales
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}