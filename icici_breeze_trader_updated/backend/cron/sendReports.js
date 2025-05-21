const cron = require('node-cron');
const { exportStrategiesExcel } = require('../services/strategyService');
const { sendTelegramFile, sendEmailWithAttachment } = require('../utils/notifier');

cron.schedule('0 18 * * 1-5', async () => {
  const excelPath = await exportStrategiesExcel(true);
  await sendTelegramFile(excelPath);
  await sendEmailWithAttachment(excelPath);
});
