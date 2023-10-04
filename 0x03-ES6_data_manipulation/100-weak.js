export const weakMap = new WeakMap();
export function queryAPI(endpoit) {
  if (weakMap.has(endpoit)) {
    weakMap.set(endpoit, weakMap.get(endpoit) + 1);
    if (weakMap.get(endpoit) >= 5) {
      throw Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoit, 1);
  }
}
