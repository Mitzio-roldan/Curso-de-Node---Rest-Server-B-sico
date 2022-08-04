const {Router} = require('express')
const controllerUser = require('../controllers/users')
const cors = require('cors')
const router = Router()

router.get('/', controllerUser.usuariosGet)

router.put('/:id', controllerUser.usuariosPut)

router.post('/', controllerUser.usuariosPost)

router.delete('/', controllerUser.usuariosDelete)

router.patch('/', controllerUser.usuariosPatch)

module.exports = router