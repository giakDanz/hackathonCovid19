let mongoose = require('mongoose')

let EstablecimientoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    ruc:{
      type: Number,
      required: true
    },
    operador:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    distrito:{
        type: String,
        required: true
    },
    direccion:{
        type: Number,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    }
});

const Establecimiento = module.exports = mongoose.model('Establecimiento', EstablecimientoSchema, "establecimientos")