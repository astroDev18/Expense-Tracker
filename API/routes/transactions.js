var express = require('express');
var router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions');

/* GET users listing. */

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

module.exports = router;
