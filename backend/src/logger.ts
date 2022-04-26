import winston, { format, transports } from 'winston';
import config from './config';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};
winston.addColors(colors);

const logFormat = format.combine(
  format.json(),
  format.colorize({ all: true })
);

const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  format: logFormat,
  defaultMeta: { service: 'backend' },
  transports: [new transports.Console()],
});

export default logger;
