let express = require('express');
    router = express.Router();
    etagere = require('../controllers/etagere.controller.js');

router.route('/:et_id').get((req, res) => {
    etagere.getSectionEtageres(req.params.et_id).then((result) => {
        res.send(result)
    })
})

module.exports = router