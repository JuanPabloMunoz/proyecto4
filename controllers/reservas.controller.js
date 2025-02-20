const Reserva= require('../models/reservas.js');//importamos la clase Reserva y sus propiedades desde el archivo reservas.js


const reserva= new Reserva();//creamos una instancia de la clase Reserva


const obtenerReservas=(req,res)=>{//muestra todas las reservas
    try{
    const reservas= reserva.obtenerTodasLasReservas();
    res.send(reservas);
    }catch(error){
        console.error(error);
        res.status(500).send('Se detecto un error');
    }
};




const obtenerReservaPorId=(req,res)=>{//muestra las resrvaciones por id
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



const eliminarReserva= (req,res)=>{//elimina una reserva por id
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



  const actualizarReserva=(req,res)=>{// modifica una rserva por id
    try{
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
    }catch(error){
        console.error(error);
        res.status(500).send('Se detecto un error');   
    }


};
 



//exporto mis funciones
module.exports={
    obtenerReservas,
    obtenerReservaPorId,
    crearReserva,
    eliminarReserva,
    actualizarReserva
}