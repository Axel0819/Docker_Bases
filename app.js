const cron = require('node-cron');
const { syncDb } = require('./tasks/sync-db');

console.log('Inicio CRON-TICKER');

cron.schedule('1-59/5 * * * * *', syncDb);