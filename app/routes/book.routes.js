const Book = require('../services/book.service');
const router = require('express').Router();

router.delete('/:id', Book.deleteBook);

router.get('/', Book.getAllBook);

router.get('/:id', Book.getBook);

router.post('/', Book.createBook);

router.patch('/:id', Book.updateBook);

module.exports = router;
