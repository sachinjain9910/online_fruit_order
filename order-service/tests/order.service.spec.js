const { checkout } = require('../src/order.service');
const walletService = require('../../wallet-service/src/wallet.service');
const eventBus = require('../src/event-bus');

jest.mock('../../wallet-service/src/wallet.service');
jest.mock('../src/event-bus');

describe('Order Service - Checkout', () => {

     beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should deduct wallet balance and send confirmation when paid by wallet', () => {
    checkout({
      userId: 'U1',
      amount: 50,
      paymentMethod: 'WALLET'
    });

    expect(walletService.deductBalance).toHaveBeenCalledWith('U1', 50);
    expect(eventBus.publish).toHaveBeenCalledWith(
      'OrderPlaced',
      expect.objectContaining({ userId: 'U1', amount: 50 })
    );
  });

  test('should not deduct wallet balance when paid by credit card', () => {
    checkout({
      userId: 'U2',
      amount: 100,
      paymentMethod: 'CREDIT_CARD'
    });

    expect(walletService.deductBalance).not.toHaveBeenCalled();
    expect(eventBus.publish).toHaveBeenCalledWith(
      'OrderPlaced',
      expect.objectContaining({ userId: 'U2', amount: 100 })
    );
  });

});
