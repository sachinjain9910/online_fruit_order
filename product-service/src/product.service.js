

function sortProducts(products, { sortBy, order = 'asc' }) {
  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      if (a.price !== b.price) {
        return order === 'asc'
          ? a.price - b.price
          : b.price - a.price;
      }
      // price same → higher rating first
      return b.rating - a.rating;
    }

    if (sortBy === 'rating') {
      if (a.rating !== b.rating) {
        return order === 'asc'
          ? a.rating - b.rating
          : b.rating - a.rating;
      }
      // rating same → cheaper first
      return a.price - b.price;
    }

    return 0;
  });

  return sorted;
}

module.exports = { sortProducts };

