module.exports = (sequelize, Sequelize) => {
    const Batiment = sequelize.define("batiment", {
      ba_id: {
        type: Sequelize.INTEGER
      },
      ba_adresse: {
        type: Sequelize.STRING
      }
    });
  
    return Batiment;
}