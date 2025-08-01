import winston from 'winston';
import 'winston-daily-rotate-file';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const logDir = process.env.LOG_DIR || 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFormatLocal = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`)
);

const dailyRotateTransport = new winston.transports.DailyRotateFile({
  dirname: logDir,
  filename: 'execution-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '1d',
  zippedArchive: false
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: logFormatLocal ,
  transports: [
    new winston.transports.Console(),
    dailyRotateTransport
  ]
});