const express = require('express');
const { userAuth } = require('../middleware/user/userAuthentication');

const { createAddress, getAddresses, getAddress, updateAddress, deleteAddress } = require('../controllers/addressesController');

module.exports = express.Router()
  .post('/create', userAuth, createAddress)
  .get('/', userAuth || adminAuth, getAddresses)
  .get('/:name', userAuth || adminAuth, getAddress)
  .patch('/update/:name', userAuth, updateAddress)
  .delete('/delete:name', userAuth, deleteAddress);