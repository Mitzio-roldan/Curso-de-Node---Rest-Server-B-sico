const express = require('express')
const cors = require('cors')
class server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.middlwares()
        this.routes()
        
    }
    middlwares(){
        this.app.use(express.static('public'));
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        
        this.app.use('/api/usuarios', require('../routes/user'))

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}
module.exports = server