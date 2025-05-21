const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

exports.sendTelegramFile = async (filePath) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const form = new FormData();
  form.append('chat_id', chatId);
  form.append('document', fs.createReadStream(filePath));
  await axios.post(`https://api.telegram.org/bot${token}/sendDocument`, form, { headers: form.getHeaders() });
};

exports.sendEmailWithAttachment = async (filePath) => {
  // Placeholder for nodemailer setup
};
