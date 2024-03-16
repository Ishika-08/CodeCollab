const express = require('express');
const router = express.Router();
const EditorController = require('../controllers/EditorControllers');

router.post('/python', EditorController.runPython);

module.exports = router;