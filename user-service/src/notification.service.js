function sendSMS(userId, message) {
  console.log(`SMS sent to ${userId}: ${message}`);
}

function sendEmail(userId, message) {
  console.log(`Email sent to ${userId}: ${message}`);
}

module.exports = { sendSMS, sendEmail };
