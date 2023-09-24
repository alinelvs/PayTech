import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'

import { CryptoProvider } from '../models/crypto.model';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class AESCryptoProvider extends CryptoProvider {

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, environment.cryptoSecretKey).toString();
  }

  decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, environment.cryptoSecretKey).toString(CryptoJS.enc.Utf8);
  }
}
