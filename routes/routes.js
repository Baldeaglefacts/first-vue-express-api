let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'Greetings! Did you know that Bald Eagle talons have a grip strength of 300-400psi?'})
})

module.exports = router


