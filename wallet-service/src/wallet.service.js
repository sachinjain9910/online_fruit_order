const eventBus = require('./event-bus');

function handleUserRegistered(event) {
  if (!event.referralCode) return;

  eventBus.publish('WalletCredited', {
    referrerCode: event.referralCode,
    amount: 10
  });
}

function deductBalance(userId, amount) {
  // real implementation later
}

module.exports = {
  handleUserRegistered,
  deductBalance
};


