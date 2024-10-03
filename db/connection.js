const mongoose = require('mongoose');

//mongodb://127.0.0.1:27017/pesgms
mongoose.createConnection('mongodb://127.0.0.1/pesatto_gms', { tls: "false", ssl: "false", replicaSet: 'rs0' }).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

module.exports = mongoose

