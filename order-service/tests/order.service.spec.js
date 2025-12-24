jest.mock('axios', () => ({
  post: jest.fn()
}));

jest.mock('../src/event-bus', () => ({
  publish: jest.fn()
}));

const axios = require('axios');
const eventBus = require('../src/event-bus');
const { checkout } = require('../src/order.service');

describe('Order Service - Checkout', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call wallet service and publish event when paid by wallet', async () => {
    axios.post.mockResolvedValue({ data: { success: true } });

    await checkout({
      userId: 'U1',
      amount: 50,
      paymentMethod: 'WALLET'
    });

    expect(axios.post).toHaveBeenCalledWith(
      'http://wallet-service:3000/wallet/deduct',
      { userId: 'U1', amount: 50 }
    );

    expect(eventBus.publish).toHaveBeenCalledWith(
      'OrderPlaced',
      expect.objectContaining({
        userId: 'U1',
        amount: 50,
        paymentMethod: 'WALLET'
      })
    );
  });

  test('should not call wallet service when paid by credit card', async () => {
    await checkout({
      userId: 'U2',
      amount: 100,
      paymentMethod: 'CREDIT_CARD'
    });

    expect(axios.post).not.toHaveBeenCalled();

    expect(eventBus.publish).toHaveBeenCalledWith(
      'OrderPlaced',
      expect.objectContaining({
        userId: 'U2',
        amount: 100,
        paymentMethod: 'CREDIT_CARD'
      })
    );
  });
});
