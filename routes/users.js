const express = require('express');
const router = express.Router();
const { signup, signin, test } = require('../controls/userControls');

router.get('/signup', signup);
router.post('/signin', signin);

router.get('/test', test);

module.exports = router;
