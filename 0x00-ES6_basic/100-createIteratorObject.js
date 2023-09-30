export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  const names = [];
  for (const dep of departments) {
    names.push(...report.allEmployees[dep]);
  }
  const iterator = {};
  iterator[Symbol.iterator] = function iter() {
    let i = 0;
    let done = false;
    return {
      next() {
        const val = names[i];
        if (i === names.length) {
          done = true;
        }
        i += 1;
        return { value: val, done };
      },
    };
  };
  return iterator;
}
