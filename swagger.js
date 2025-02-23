import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json';
const endPointFiles = ['./index.js'];

const doc={
    info:{
        version: "1.0.0",
        title: "Reservas de hoteles",
        description: "Esta API permite crear, modificar, eliminar y obtener listado de reservas de hoteles"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {name: "Reservas", description: "End points de reservas de hoteles"}
    ],
    definitions: {
        Reserva: {
            id: "string",
            nombre: "string",
            apellido: "string",
            telefono: "string",
            fechaLlegada: "string",
            fechaSalida: "string",
            tipoHabitacion: "string",
            cantidadPersonas: "number",
            estado: "string"
        }
    }
}

swaggerAutogen(outputFile, endPointFiles, doc);