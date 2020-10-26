const db = require('../models');
const BookModel = db.BookModel;

exports.createBook = (req, res) => {
  if (!req.body.bookName) {
    return res.status(400).send({
      message: `Book's name can not be empty!`,
    });
  }

  const newBook = ({ bookName, description } = req.body);

  BookModel.create(newBook)
    .then((book) => {
      return res.send(book);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while add book.',
      });
    });
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  BookModel.destroy({
    where: { id: id },
  })
    .then((num) => {
      return num > 0
        ? res.status(200).send({
            message: `${num} book was destroy successfully!`,
          })
        : res.status(100).send({
            message: `Failed to destroy. Book with id  is not available`,
          });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ err, message: `Could not destroy book with id=${id}` });
    });
};

exports.getAllBook = (req, res) => {
  BookModel.findAll()
    .then((book) => {
      return res.send(book);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving books.',
      });
    });
};

exports.getBook = (req, res) => {
  const id = req.params.id;
  BookModel.findByPk(id)
    .then((book) => {
      return book
        ? res.send(book)
        : res.send({ message: `book with id ${id} is not available` });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ err, message: `Error retrieving book with id ${id}` });
    });
};

exports.updateBook = (req, res) => {
  const id = req.params.id;
  const newBook = req.body;

  BookModel.update(newBook, {
    where: { id: id },
  })
    .then((num) => {
      return num > 0
        ? res.status(200).send({
            message: `${num} book was updated successfully!`,
          })
        : res.status(100).send({
            message: `Failed to update. Book with id ${id} is not available`,
          });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ err, message: `Could not delete book with id ${id}` });
    });
};
