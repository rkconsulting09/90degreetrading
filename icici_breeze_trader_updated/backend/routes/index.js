const express = require('express');
const router = express.Router();
const strategyService = require('../services/strategyService');

router.post('/webhook/tradingview', strategyService.triggerStrategyFromAlert);

module.exports = router;
