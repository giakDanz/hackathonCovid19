let mongoose = require('mongoose')

let RestauranteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    ruc:{
      type: Number,
      required: true
    },
    tipoDoc:{
        type: String,
        required: true
    },
    documento:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    celular:{
        type: Number,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    }
});

const Restaurante = module.exports = mongoose.model('Restaurante', RestauranteSchema)