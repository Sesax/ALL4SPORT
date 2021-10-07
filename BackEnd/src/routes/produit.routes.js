let express = require('express');
    Produit = require('../controllers/produit.controller.js');
    router = express.Router();

router.route('/:pr_id').get((req, res) => {
    res.send(Produit.getProduit(req.params.pr_id))
})

module.exports = router;