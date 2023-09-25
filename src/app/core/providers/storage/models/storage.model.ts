export abstract class StorageProvider {
  public abstract setItem(key: string, value: any): boolean;
  public abstract getItem<T>(key: string): T | null;
  public abstract removeItem(key: string): boolean;
  public abstract clear(): boolean;
}
