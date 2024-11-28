import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('app', () => {
  const secret = process.env.SECRET_KEY;
  const crypto_key = process.env.CRYPTO_KEY; // We may not need it

  if (!secret || !crypto_key) {
    throw new Error('Missing app environment variables');
  }
  return {
    secret: secret,
    crypto_key: crypto_key,
  };
});
