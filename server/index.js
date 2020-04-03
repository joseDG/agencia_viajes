//Importar express
const express = require('express');
const path = require('path');
//importart el body paser para el formato de envio de la informacion
const bodyParser = require('body-parser')
const routes = require('./routes');
//importar el config 
const configs = require('./config');
//importar para mensaje de la bd
const db = require('./config/database');

//IMportarlas variables de entorno
require('dotenv').config({ path: 'variables.env' })


db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error));


//configurar express
const app = express();

//habilitar pug 
app.set('view engine', 'pug');

//anadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta donde esta el css y img estaticas
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static('public'));

//Validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el ano actual y genera la ruta 
app.use((req, res, next) => {
    //crear nueva fecha
    const fecha = new Date();
    //res.local => son variables internas de node y se cra el objeto
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

//Ejecutamos el bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//cargar las rutas
app.use('/', routes());

//Puetos y HOst para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port, host, () => {
    console.log('El servidor esta funcionando');
});