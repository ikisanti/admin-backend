require('dotenv').config();

// Importar a express
const express = require('express');
const { dbConnection } = require('./database/config');

const cors = require('cors');



//Base de Datos
dbConnection();

//Crear el servidor de express 
const app = express();

//Configurar cors
app.use(cors());

//Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    });
});

app.listen(process.env.PORT, () => { console.log('Servidor corriendo en el puerto ' + process.env.PORT) });