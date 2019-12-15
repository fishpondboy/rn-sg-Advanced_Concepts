const twilio = require('twilio');

const accountSid = 'AC2e7a9686080def833a168d2f73977854';
const authToken = 'bbf337077c2e0af37cd7123335757512';

module.exports = new twilio.Twilio(accountSid, authToken);
