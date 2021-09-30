let express = require('express');
const { createProduit } = require('../controllers/produit.controller');
    router = express.Router();



router.route('/create').post((req, res, next) => {
    createProduit(req.body.reference, req.body.fournisseur, req.body.rayon, req.body.cout_unitaire_HT, req.body.description);
})