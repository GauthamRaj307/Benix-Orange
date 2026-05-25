import dotenv from 'dotenv';
import path from 'path';

// Read NODE_ENV from command line. Default to 'staging' if not provided.
const environment = process.env.NODE_ENV || 'staging';

// Construct path to specific env file: .env.staging or .env.prod
const envFilePath = path.resolve(__dirname, `../.env.${environment}`);

dotenv.config({ path: envFilePath });

export const ENV = {
  ENVIRONMENT: environment,
  BASE_URL: process.env.BASE_URL || '',
  ADMIN_USER: process.env.ADMIN_USERNAME || '',
  ADMIN_PASS: process.env.ADMIN_PASSWORD || '',
};

// Console log to confirm current destination during initialization
console.log(`RUNNING AUTOMATION ON ENVIRONMENT: [${ENV.ENVIRONMENT.toUpperCase()}]`);
