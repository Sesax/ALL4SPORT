let express = require('express');
    router = express.Router();
    controller = require('../controllers/batiment.controller.js');

router.route('/create').post((req, res, next) => {
    controller.create({
        ba_id: req.body.ba_id,
        ba_adresse: req.body.ba_adresse
    }).then(console.log('less gooo'))
})

router.route('/see').get((req, res) => {
    controller.getAllBatiments().then((result) => {

        res.send(result)
    })
})

module.exports = router;