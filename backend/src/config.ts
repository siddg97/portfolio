const {
  LOG_LEVEL,
  ENV,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SENDER,
  MAIL_USER,
  MAIL_PASSWORD,
} = process.env;

const requiredEnvVars = [
  'MAIL_HOST',
  'MAIL_PORT',
  'MAIL_SENDER',
  'MAIL_USER',
  'MAIL_PASSWORD',
];

const envVarExists = (VAR: string) => {
  if (!process.env[VAR]) {
    throw new Error(`No ${VAR} environment variable set`);
  }
};

requiredEnvVars.forEach(envVarExists);

const config = {
  ENV: ENV || 'development',
  LOG_LEVEL: LOG_LEVEL || 'debug',
  transportOptions: {
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  },
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_SENDER,
};

export default config;
