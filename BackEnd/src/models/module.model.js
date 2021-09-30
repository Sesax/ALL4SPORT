module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define("module", {
      mo_id: {
        type: Sequelize.INTEGER
      },
      fk_ba: {
        type: Sequelize.INTEGER
      }
    });
  
    return Module;
}