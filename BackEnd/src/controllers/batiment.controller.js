const db = require("../../config/database.js");
const Batiment = db.batiments;

exports.create = (batiment) => {
    return Batiment.create({
        ba_id: batiment.ba_id,
        ba_adresse: batiment.ba_adresse
    })
        .then((batiment) => {
            console.log(">> Created Batiment: "+ JSON.stringify(tag, null, 2));
            return batiment;
        })
        .catch((err) => {
            console.log(">> Error while creating Batiment: ", err);
        })
};

exports.findBatimentProduits = (batimentId) => {
    return Batiment.findByPk(batimentId, { include: ["produits"] })
      .then((batiment) => {
        return batiment;
      })
      .catch((err) => {
        console.log(">> Error while finding batiment: ", err);
      });
};

exports.getAllBatiments = () => {
  return Batiment.findAll()
}

exports.getBatiment = (ba_id) => {
  return Batiment.findAll({
    where: {ba_id: ba_id}
  })
}