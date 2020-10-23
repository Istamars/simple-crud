const db = require('../models');
const DummyModel = db.dummyModel;

exports.createDummy = (req, res) => {
  if (!req.body.itemName) {
    res.status(400).send({
      message: 'Item name can not be empty!',
    });
    return;
  }

  const dummy = ({ itemName, description } = req.body);

  DummyModel.create(dummy)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while insert data.',
      });
    });
};

exports.deleteDummy = (req, res) => {
  const id = req.params.id;

  DummyModel.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num > 0) {
        res.status(200).send({
          message: `${num} data was deleted successfully!`,
        });
      }
      res.status(100).send({
        message: `Failed to delete. Data with id  is not available`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ err, message: `Could not delete data with id=${id}` });
    });
};

exports.getAllDummy = (req, res) => {
  DummyModel.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data.',
      });
    });
};

exports.getDummy = (req, res) => {
  const id = req.params.id;
  DummyModel.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving data with id ${id}`,
      });
    });
};

exports.updateDummy = (req, res) => {
  const id = req.params.id;
  const newDummy = req.body;

  Tutorial.update(newDummy, {
    where: { id: id },
  })
    .then((num) => {
      if (num > 0) {
        res.status(200).send({
          message: `${num} data was updated successfully!`,
        });
      }
      res.status(100).send({
        message: `Failed to update. Data with id ${id} is not available`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ err, message: `Could not delete data with id ${id}` });
    });
};
