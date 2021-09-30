module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      se_id: {
        type: Sequelize.INTEGER
      },
      fk_ra: {
        type: Sequelize.INTEGER
      }
    });
  
    return Section;
}