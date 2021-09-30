const db = require("../models");
const Produit = db.produits;

exports.create = (produit) => {
    return Produit.create({
        pr_id: produit.pr_id,
        pr_cout_unitaire_HT: produit.pr_cout_unitaire_HT,
        pr_description: produit.pr_description,
        fk_fournisseur: produit.fk_fournisseur,
        fk_rayon: produit.fk_rayon,
        fk_et: produit.fk_et,
        fk_et: produit.fk_et,
        fk_se: produit.fk_se,
        fk_ra: produit.fk_ra,
        fk_mo: produit.fk_mo,
        fk_ba: produit.fk_ba,
    })
        .then((produit) => {
            console.log(">> Created Produit: "+ JSON.stringify(tag, null, 2));
            return produit;
        })
        .catch((err) => {
            console.log(">> Error while creating Produit: ", err);
        })
};

exports.findAllProduits = () => {
    return Produit.findAll({
      include: ["photos"],
    }).then((produits) => {
      return produits;
    });
};