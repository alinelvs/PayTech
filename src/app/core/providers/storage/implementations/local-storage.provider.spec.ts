import { TestBed } from '@angular/core/testing';
import { LocalStorageProvider } from './local-storage.provider';
import { AESCryptoProvider } from '@core/providers/crypto/implementations/aes-crypto.provider';
import { CryptoProvider } from '@core/providers/crypto/models/crypto.model';



describe('LocalStorageProvider', () => {
  let provider: LocalStorageProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageProvider,
        { provide: CryptoProvider, useClass: AESCryptoProvider },
      ]
    });
    provider = TestBed.inject(LocalStorageProvider);
  });

  it('should be created', () => {
    expect(provider).toBeTruthy();
  });

  it('should get a stored item', () => {
    const value = 'key-value';
    provider.setItem('key', value);

    const result = provider.getItem<string>('key');
    expect(result).toEqual(value);
  });

  it('should remove a stored item', () => {
    const value = 'key-value';
    provider.setItem('key', value);
    provider.removeItem('key');

    const result = provider.getItem<string>('key');
    expect(result).toEqual(null);
  });

  it('should clear all stored items', () => {
    const value = 'key-value';
    provider.setItem('key', value);
    provider.clear();

    const result = provider.getItem<string>('key');
    expect(result).toEqual(null);
  });

  it('should return null when localStorage is not available', () => {
    const result = provider.getItem<string>('key');
    expect(result).toBeNull();
  });

});
