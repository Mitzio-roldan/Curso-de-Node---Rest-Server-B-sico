const jwt = require('jsonwebtoken');

const generarJWT = async(uid = "") =>{
  return new Promise((resolve, reject) => {
    
    jwt.sign({uid}, process.env.PRIVATEKEY, {
        expiresIn:'4h'
    }, (err, token) =>{
        if(err){
            console.log(err);
            reject('No se pudo generar el token')
        }
        resolve(token)
    })

  })


}
module.exports = generarJWT