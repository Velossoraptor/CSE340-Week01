// Needed Resources
const express = require('express');
const router = new express.Router();
const invController = require('../controllers/invController');
const utilities = require('../utilities/');
const invValidate = require('../utilities/inventory-validation');

// Route to get to Inventory Management
router.get('/', utilities.handleErrors(invController.buildManagement));

// Route to get classification management
router.get(
	'/add-classification',
	utilities.handleErrors(invController.buildAddClassification)
);

// Route to handle adding a classification
router.post(
	'/add-classification',
	invValidate.classificationRules(),
	invValidate.checkClassData,
	utilities.handleErrors(invController.addClassification)
);

// Route to get inventory management
router.get(
	'/add-inventory',
	utilities.handleErrors(invController.buildAddInventory)
);

// Route to handle adding a vehicle
router.post(
	'/add-inventory',
	invValidate.inventoryRules(),
	invValidate.checkInvData,
	utilities.handleErrors(invController.addInventory)
);

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

// Route to get inventory items by classification in the management page
router.get(
	'/getInventory/:classification_id',
	utilities.handleErrors(invController.getInventoryJSON)
);

// Route to start to modify inventory items by id
router.get('/edit/:inv_id', utilities.handleErrors(invController.buildEditInv));

// Route to handle deleting an item
router.get('/delete/:inv_id', utilities.handleErrors(invController.buildDeleteInv));

// Route to handle actual deleting of item
router.post('/delete/', utilities.handleErrors(invController.deleteInventory));

// Route to handle submission of modified inv item
router.post(
	'/update/',
	invValidate.inventoryRules(),
	invValidate.checkUpdateData,
	utilities.handleErrors(invController.updateInventory)
);

// Route to trigger 500 series error
router.get('/trigger500', utilities.handleErrors(invController.throwError));

module.exports = router;
