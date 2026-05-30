export function rateLimit(key: string, limit = 10) {
  const now = Date.now();
  const windowMs = 60 * 1000;

  if (!(global as any).rateStore) {
    (global as any).rateStore = {};
  }

  const store = (global as any).rateStore;

  if (!store[key]) {
    store[key] = [];
  }

  store[key] = store[key].filter((t: number) => now - t < windowMs);

  if (store[key].length >= limit) {
    return false;
  }

  store[key].push(now);
  return true;
}