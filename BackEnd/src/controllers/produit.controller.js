const database = require("../../config/database.js");
const Sequelize = require('sequelize');
const Produit = database.produits;

async function getProductsByBatiment(idBatiment){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idBatiment: idBatiment}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsByModule(idModule){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_mo = :idModule', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idModule: idModule}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsByRangee(idRangee){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ra = :idRangee', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idRangee: idRangee}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsBySection(idSection){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_se = :idSection', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idSection: idSection}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsByEtagere(idEtagere){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_et = :idEtagere', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idEtagere: idEtagere}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

exports.findAllProduits = () => {
    return Produit.findAll({
      include: ["photos"],
    }).then((produits) => {
      return produits;
    });
};

exports.getEtagereProduits = (et_id) => {
    return Produit.findAll({
        where: {
            fk_et: et_id
        }
    })
}

exports.getProduit = (ba_id, mo_id, ra_id, se_id, et_id, pr_id) => {
    return Produit.findAll({
        where: {
            fk_ba: ba_id,
            fk_mo: mo_id,
            fk_ra: ra_id,
            fk_se: se_id,
            fk_et: et_id,
            pr_id: pr_id
        }
    })
}

exports.getProduits = (ba_id, mo_id, ra_id, se_id, et_id) => {
    return Produit.findAll({
        where: {
            fk_ba: ba_id,
            fk_mo: mo_id,
            fk_ra: ra_id,
            fk_se: se_id,
            fk_et: et_id
        }
    })
}

module.exports = {
    getProductsByBatiment,
    getProductsByModule,
    getProductsByRangee,
    getProductsBySection,
    getProductsByEtagere
}