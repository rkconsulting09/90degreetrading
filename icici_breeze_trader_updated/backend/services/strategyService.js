const strategyQueue = require('../queue/strategyQueue');

exports.triggerStrategyFromAlert = async (req, res) => {
  const { strategyId, message } = req.body;
  await strategyQueue.add({ strategy_id: strategyId, message });
  res.status(200).json({ status: 'Strategy triggered from TradingView alert' });
};
