function publish(eventName, payload) {
  console.log('Event published:', eventName, payload);
}

module.exports = { publish };
