// Needed Resources
const express = require('express');
const router = new express.Router();
const accountController = require('../controllers/accountController');
const utilities = require('../utilities/');
const regValidate = require('../utilities/account-validation');

// Route for login
router.get('/login', utilities.handleErrors(accountController.buildLogin));

// Route for registration form
router.get(
	'/register',
	utilities.handleErrors(accountController.buildRegister)
);

// Route to actually register
router.post(
	'/register',
	regValidate.registrationRules(),
	regValidate.checkRegData,
	utilities.handleErrors(accountController.registerAccount)
);

module.exports = router;
