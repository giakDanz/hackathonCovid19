let mongoose = require('mongoose')

let UsuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
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

const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema)