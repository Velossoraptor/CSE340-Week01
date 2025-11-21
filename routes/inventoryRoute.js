// Needed Resources
const express = require('express');
const router = new express.Router();
const invController = require('../controllers/invController');
const utilities = require('../utilities/');

// Route to get to Inventory Management
router.get('/', utilities.handleErrors(invController.buildManagement));

// Route to build inventory by classification view
router.get(
	'/type/:classificationId',
	utilities.handleErrors(invController.buildByClassificationId)
);

// Route to get Inventory Detail Page
router.get(
	'/details/:invId',
	utilities.handleErrors(invController.buildInvDetail)
);

// Route to trigger 500 series error
router.get('/trigger500', utilities.handleErrors(invController.throwError));


module.exports = router;
