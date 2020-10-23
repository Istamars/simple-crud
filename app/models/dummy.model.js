module.exports = (sequelize, Sequelize) => {
  const Dummy = sequelize.define('dummy', {
    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Dummy;
};
