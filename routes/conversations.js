const express = require('express');
const router = express.Router();
const { newConvo } = require('../controls/conversationsControl');

router.post('/conversations', newConvo);

module.exports = router;
