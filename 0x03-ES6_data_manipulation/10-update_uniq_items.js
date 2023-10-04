export default function updateUniqueItems(map) {
  if (typeof (map.set) !== 'function') throw Error('Cannot process');
  map.forEach((val, key) => {
    if (val === 1) {
      map.set(key, 100);
    }
  });
  return map;
}
