module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photo", {
      ph_id: {
        type: Sequelize.INTEGER
      },
      ph_img: {
        type: Sequelize.STRING
      },
      fk_pr: {
        type: Sequelize.STRING
      }
    });
  
    return Photo;
}