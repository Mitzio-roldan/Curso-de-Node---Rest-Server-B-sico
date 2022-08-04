const {response} = require('express')


const controller = {
    usuariosGet: (req, res = response) =>{
        const {nombre = 'Mitzio'} = req.query
        res.status('200').json({
            ok: true,
            nombre
        })

    },
    
    usuariosPost: (req, res) =>{
        const {nombre, edad} = req.body
        res.status('201').json({
            ok: true,
            nombre,
            edad
        })
    },
    
    usuariosPut: (req, res) =>{
        const id = req.params.id
        res.status('200').json({
            ok: true,
            id
        })

    },
    
    usuariosDelete: (req, res) =>{
        res.status('200').json({
            ok: true,
            msg: 'Delete'
        })

    },
    
    usuariosPatch: (req, res) =>{
        res.status('200').json({
            ok: true,
            msg: 'Patch'
        })

    },
}

module.exports = controller;