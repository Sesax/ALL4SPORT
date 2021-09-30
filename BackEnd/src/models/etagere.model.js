module.exports = (sequelize, Sequelize) => {
    const Etagere = sequelize.define("etagere", {
      et_id: {
        type: Sequelize.INTEGER
      },
      fk_se: {
        type: Sequelize.INTEGER
      }
    });
  
    return Etagere;
}