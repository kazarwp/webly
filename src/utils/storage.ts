class StorageWraper {
  private storage?: Storage;

  constructor(type: "local" | "session") {
    try {
      this.storage =
        type === "local" ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.log(error);
    }
  }

  get length() {
    if (!this.storage) return;

    return this.storage.length;
  }

  get<T>(key: string) {
    if (!this.storage) return;

    try {
      const value = this.storage.getItem(key);

      if (value === null) {
        return;
      }

      return JSON.parse(value) as T;
    } catch (error) {
      console.log(error);
    }
  }

  set(key: string, value: unknown) {
    if (!this.storage) return;

    try {
      const stringValue = JSON.stringify(value);
      this.storage.setItem(key, stringValue);
    } catch (error) {
      console.error(error);
    }
  }

  remove(key: string) {
    if (!this.storage) return;

    this.storage.removeItem(key);
  }

  clear() {
    if (!this.storage) return;

    this.storage.clear();
  }
}

export const localStorageWrapper = new StorageWraper("local");
export const sessionStorageWrapper = new StorageWraper("session");
