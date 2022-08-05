const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');
const generarJWT = require('../helpers/generar_jwt')

const controller = {

    login: async(req, res) =>{

        const {correo, password} = req.body
        try{
            // verificar email
            const usuario = await Usuario.findOne({correo})
            if (usuario) {
                if(usuario.estado){
                    const validPassword = bcrypt.compareSync(password, usuario.password)
                    if(validPassword){
                        
                        const token = await generarJWT(usuario.id)
                        return res.json({
                            usuario,
                            token
                        })    
                    }
                    
                    
                } 

            }
            
            return res.status(400).json({
                msg: 'User or password is incorrect'
            })
            
            // user activo o no

            // password ok

            // generar el JWT



        }catch{
            return res.status('500').json({
                msg: "Hable con el Administrador"
            })
        }

    }

}

module.exports = controller 