export abstract class CryptoProvider {
  public abstract encrypt(value: string): string
  public abstract decrypt(textToDecrypt: string): string;
}
