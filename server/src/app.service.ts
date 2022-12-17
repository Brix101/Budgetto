import { Injectable } from '@nestjs/common';
import { generateKeyPairSync } from 'crypto';
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

console.log(privateKey, publicKey);
@Injectable()
export class AppService {
  getHello(): string {
    return 'Server Online!';
  }
}
