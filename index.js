//Proyecto N4 Reservas de hoteles V1.0
require('dotenv').config();
const express = require('express');
const app= express();
const reservasRouter=require('./routes/reservas.route');


app.use(express.json());
app.use('/reservas', reservasRouter);//en esta funcion middleware las req que vengan con 'productos' son pasadas a productosRouter ubicadas en productos.router.js

const nuclearPaswword=process.env.example;
console.log(`la variable de entorno .env.example, ha sido ocultada, ya que  hay guardamos la clave nuclear ${nuclearPaswword} JAJAJA`);

const port=process.env.PORT || 3000;
app.listen(port,()=>{
     
     console.log(`El servidor ha sido habilitado con éxito, en el puerto ${port}`);
})
