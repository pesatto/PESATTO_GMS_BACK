const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/pesatto_gms', { tls: "false", ssl: "false", replicaSet: 'rs0' });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connect function to be reused in other files
module.exports = connectDB;