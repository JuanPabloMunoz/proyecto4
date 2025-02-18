const fs=require('fs');
const Reserva= require('../models/reservas.js');
const rutaBD= './data/reservas.json';


const reserva= new Reserva();


const obtenerReservas=(req,res)=>{//muestra todoslos productos
    try{
    const reservas= reserva.obtenerTodasLasReservas();
    res.send(reservas);
    }catch(error){
        console.error(error);
        res.status(500).send('Se detecto un error');
    }
};




const obtenerReservaPorId=(req,res)=>{//muestra los productos por la id dada por el usuario
 try{  
    const id= req.params.id;
    const reservaEncontrada = reserva.obtenerReservaPorId(id);
    
   
    if(!reservaEncontrada){
        res.status(404).send('Reserva no encontrada');  
        return; 
    }
    res.send(reservaEncontrada);

}catch (error){
    console.error(error);
    res.status(500).send('Se detecto un error');
}
};




 const crearReserva=(req,res)=>{//crea una nueva reserva
    try{
     const reservaNueva= req.body;
     reserva.crearReserva(reservaNueva);
     res.send('Reserva Creada');
    }
    catch(error){
        console.error(error);
        res.status(500).send('Se detecto un error');
    }   
  };



const eliminarReserva= (req,res)=>{//Problema try catch
    try{
    const id=req.params.id; 
    const reservaEncontrada = reserva.obtenerReservaPorId(id);
    

    if(!reservaEncontrada){
        res.status(404).send('Reserva no encontrada');  
        return; 
    };
      reserva.eliminarReserva(id);
      res.send('Reserva Eliminada');
    
    }catch(error){
        console.error(error);
        res.status(500).send('Se detecto un error');
    };
    
};



  const actualizarReserva=(req,res)=>{// modifica un producto
    const id=req.params.id;
    const datosACambiar=req.body;
    const reservaEncontrada = reserva.obtenerReservaPorId(id);
    
     if(!reservaEncontrada){
        res.status(404).send('Reserva no encontrada');  
        return; 
    };

    reserva.actualizarReserva(id, datosACambiar)
    console.log(reservaEncontrada)
    res.send('Producto Actualizado');


};
 



//exporto mis funciones
module.exports={
    obtenerReservas,
    obtenerReservaPorId,
    crearReserva,
    eliminarReserva,
    actualizarReserva
}