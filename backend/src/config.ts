const {
  LOG_LEVEL,
  ENV,
} = process.env;

const config = {
  ENV: ENV || 'development',
  LOG_LEVEL: LOG_LEVEL || 'debug'
};

export default config;
