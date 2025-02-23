const express=require('express');

//Importamos los metodos que se ejecutaran en cada end point, desde el archivo controllers/reservas.controller.js
const {obtenerReservas, obtenerReservaPorId, crearReserva, eliminarReserva, actualizarReserva}=require('../controllers/reservas.controller.js');
const reservasRouter=express.Router();

//Aquí definimos nuestras rutas, end point,  y los metodos que se ejecutaran.
reservasRouter.get('/', obtenerReservas); 
reservasRouter.get('/:id',obtenerReservaPorId );
reservasRouter.post('/' ,crearReserva);
reservasRouter.delete('/:id',eliminarReserva);
reservasRouter.put('/:id', actualizarReserva);




//Exportamos el modulo con las rutas definidas
module.exports=reservasRouter;
