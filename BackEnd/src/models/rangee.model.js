module.exports = (sequelize, Sequelize) => {
    const Rangee = sequelize.define("rangee", {
      ra_id: {
        type: Sequelize.INTEGER
      },
      fk_mo: {
        type: Sequelize.INTEGER
      }
    });
  
    return Rangee;
}