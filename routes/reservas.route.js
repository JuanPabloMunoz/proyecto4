const express=require('express');
const {obtenerReservas, obtenerReservaPorId, crearReserva, eliminarReserva, actualizarReserva}=require('../controllers/reservas.controller.js');
const reservasRouter=express.Router();


reservasRouter.get('/', obtenerReservas); //cuando se ingresa ureservas' o '/' se ejecuta la funcionreservas ubireservas.controller
reservasRouter.get('/:id',obtenerReservaPorId );
reservasRouter.post('/' ,crearReserva);
reservasRouter.delete('/:id',eliminarReserva);
reservasRouter.put('/:id', actualizarReserva);



module.exports=reservasRouter;
