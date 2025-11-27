// Needed Resources
const express = require('express');
const router = new express.Router();
const accountController = require('../controllers/accountController');
const utilities = require('../utilities/');
const regValidate = require('../utilities/account-validation');

// Default route for account management
router.get('/', utilities.checkLogin, utilities.handleErrors(accountController.buildAccount));

// Route for login
router.get('/login', utilities.handleErrors(accountController.buildLogin));

// Route for logout
router.get('/logout', utilities.handleErrors(accountController.buildLogout));

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

// Process the login attempt
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLogData,
  utilities.handleErrors(accountController.login)
);

// Route to build account update page
router.post('/update/:account_id', utilities.handleErrors(accountController.buildAccountManager));

module.exports = router;
