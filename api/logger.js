/**
 * @file Configuration of the logger to dump messages both to console and file.
 */

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), myFormat),
  transports: [
    // Dump all logs to console
    new transports.Console(),
    // Dump all logs error (and below) to `error.log`
    new transports.File({ filename: 'error.log', level: 'error' }),
    // Dump all logs with level `info` and below to `combined.log`
    new transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
