const mongoose = require('mongoose');
const logger = require('../logger'); // Import the logger

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/pesatto_gms', { directConnection:true, tls: "false", ssl: "false", replicaSet: 'rs0' });
    logger.info('MongoDB connected successfully');
  } catch (err) {
    logger.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connect function to be reused in other files
module.exports = connectDB;