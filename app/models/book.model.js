module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('book', {
    bookName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
