import { ENV } from "../constants/env";
import { missingEnvVariable } from "../errors/env";

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw missingEnvVariable(name);
  }

  return value;
}

export const env = {
  PORT: Number(getEnv(ENV.PORT)),
  HOST: getEnv(ENV.HOST),
  MONGODB_URI: getEnv(ENV.MONGODB_URI),
  JWT_SECRET: getEnv(ENV.JWT_SECRET),
  REDIS_URL: getEnv(ENV.REDIS_URL),
};
