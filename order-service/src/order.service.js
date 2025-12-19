const walletService = require('../../wallet-service/src/wallet.service');
const eventBus = require('./event-bus');

function checkout({ userId, amount, paymentMethod }) {

  if (paymentMethod === 'WALLET') {
    walletService.deductBalance(userId, amount);
  }

  eventBus.publish('OrderPlaced', {
    userId,
    amount,
    paymentMethod
  });

  return { status: 'SUCCESS' };
}

module.exports = { checkout };
