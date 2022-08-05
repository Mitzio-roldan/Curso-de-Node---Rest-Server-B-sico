const Role = require('../models/role')
const Usuario = require('../models/usuario')
const db_validator = async (rol = '') => {        
    const existeRol = await Role.findOne({ rol })
    console.log(existeRol);
    if (!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la DB`)
    }
}

const email_validator = async(correo = "") =>{
    const existe_email = await Usuario.findOne({correo});
    if(existe_email){
        throw new Error(`El correo ${correo} ya está registrado en la DB`)
    }
}

const existe_usuario = async(id = "") =>{
    const existe_id = await Usuario.findById(id);
    if(!existe_id){
        throw new Error(`El id ${id}, no existe `)
    }
}

module.exports = {db_validator, email_validator, existe_usuario};