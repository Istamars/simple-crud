const Dummy = require('../services/dummy.service');
const router = require('express').Router();

router.delete('/:id', Dummy.deleteDummy);

router.get('/', Dummy.getAllDummy);

router.get('/:id', Dummy.getDummy);

router.post('/', Dummy.createDummy);

router.patch('/:id', Dummy.updateDummy);

module.exports = router;
