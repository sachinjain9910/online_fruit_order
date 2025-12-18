module.exports = function calculateCartTotal(cartItems) {
  const PRODUCT_PRICES = {
    APPLE: 10,
    ORANGE: 20
  };

  let total = 0;

  for (const item of cartItems) {
    const price = PRODUCT_PRICES[item.productId];
    total += price * item.quantity;
  }

  return total;
};

module.exports = function calculateCartTotal(cartItems) {
  const PRODUCT_PRICES = {
    APPLE: 10,
    ORANGE: 20
  };

  let total = 0;

  for (const item of cartItems) {
    if (item.productId === 'APPLE') {
      const payableApples = Math.ceil(item.quantity / 2);
      total += payableApples * PRODUCT_PRICES.APPLE;
    } else {
      total += PRODUCT_PRICES[item.productId] * item.quantity;
    }
  }

  return total;
};

function calculateApplePrice(quantity) {
  const price = 10;
  const payable = Math.ceil(quantity / 2); // Buy 1 Get 1
  return payable * price;
}

function calculateOrangePrice(quantity) {
  const price = 20;

  let payable;

  if (quantity <= 5) {
    payable = Math.min(quantity, 2);
  } else {
    payable = 2 + Math.ceil((quantity - 5) / 5);
  }

  return payable * price;
}


module.exports = function calculateCartTotal(cartItems) {
  let total = 0;

  for (const item of cartItems) {
    if (item.productId === 'APPLE') {
      total += calculateApplePrice(item.quantity);
    }

    if (item.productId === 'ORANGE') {
      total += calculateOrangePrice(item.quantity);
    }
  }

  return total;
};
