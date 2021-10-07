let express = require('express');
    router = express.Router();
    modules = require('../controllers/module.controller.js');

router.route('/:ba_id').get((req, res) => {
    modules.getBatModule(req.params.ba_id).then((result) => {
        res.send(result)
    })
})

module.exports = router;