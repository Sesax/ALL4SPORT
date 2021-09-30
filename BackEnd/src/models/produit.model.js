module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      pr_reference: {
        type: Sequelize.STRING
      },
      pr_fournisseur: {
        type: Sequelize.STRING
      },
      pr_rayon: {
        type: Sequelize.STRING
      },
      pr_cout_unitaire_HT: {
        type: Sequelize.FLOAT
      },
      pr_description: {
        type: Sequelize.STRING
      },
      fk_et: {
        type: Sequelize.INTEGER
      }
    });
  
    return Produit;
}