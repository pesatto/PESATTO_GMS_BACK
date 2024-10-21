// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Define your custom format
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

// Create a Winston logger
const logger = createLogger({
    format: combine(
        colorize(), // Colorize output
        timestamp(), // Add timestamp to logs
        customFormat // Use the custom format defined above
    ),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({ filename: 'app.log' }) // Log to a file
    ]
});

module.exports = logger;
