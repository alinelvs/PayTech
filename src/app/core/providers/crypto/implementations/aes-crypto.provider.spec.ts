import { TestBed } from '@angular/core/testing';
import { AESCryptoProvider } from './aes-crypto.provider';


describe('AESCryptoProvider', () => {
  let provider: AESCryptoProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AESCryptoProvider]
    });
    provider = TestBed.inject(AESCryptoProvider);
  });

  it('should be created', () => {
    expect(provider).toBeTruthy();
  });

  it('should encrypt a word', () => {
    const encrypt = provider.encrypt('test');
    expect(encrypt).not.toEqual('test');
  });

  it('should decrypt a word', () => {
    const decrypt = provider.decrypt('U2FsdGVkX18CGcnprrtQnrFwc8XhiZI0Ixn1Y2ONbMs=');
    expect(decrypt).toEqual('test');
  });

});
