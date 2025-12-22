// src/event-bus.js
function publish(eventName, payload) {
  // real implementation later (Kafka / SNS / RabbitMQ)
  console.log('Event published:', eventName, payload);
}

module.exports = { publish };