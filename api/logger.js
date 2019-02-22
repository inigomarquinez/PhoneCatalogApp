/**
 * @file Configuration of the logger to dump messages both to console and file.
 */

const { createLogger, format, transports } = require('winston');
const { align, colorize, combine, printf, timestamp } = format;

const colorizer = colorize();

const logger = createLogger({
  level: 'debug',
  format: combine(
    //align(),
    timestamp(),
    printf(({ level, message, timestamp }) => {
      //return `${timestamp} ${level}: ${message}`;
      let colLevel = colorizer.colorize(level, level);
      return `${timestamp} ${colLevel}: ${message}`;
    })
  ),
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
