const { v4: uuidv4 } = require('uuid');
const fs= require('fs');
const path = require('path');
const BDReservas=path.join(__dirname, '../data/reservas.json');


class Reserva {
    constructor(){
        this.reservas = this.obtenerTodasLasReservas();
    }

    obtenerTodasLasReservas(){
        const listadoReservas= JSON.parse(fs.readFileSync(BDReservas, 'utf-8'));
        return listadoReservas;
    }

    obtenerReservaPorId(id){
        const reserva = this.reservas.find(reserva => reserva.id === id);
        return reserva;
    }

    crearReserva(datosReserva){
        const nuevaReserva = {
            id: uuidv4(),
            ...datosReserva
        }
       this.reservas.push(nuevaReserva);
       this.guardar();
    }

    eliminarReserva(id){
         this.reservas = this.reservas.filter((reserva)=>reserva.id!=id);
         this.guardar();
       
    }

    actualizarReserva(id, datozAcalizar){
        this.reservas = this.reservas.map((reserva) =>{
         if(reserva.id === id){
            return {
                ...reserva,
                ...datozAcalizar
            }
         } 
         return reserva;  
        })

        this.guardar();
    }



    guardar(){
        fs.writeFileSync(BDReservas, JSON.stringify(this.reservas));
    }

}


module.exports = Reserva;