export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const itm of array) {
    newArr.push(appendString + itm);
  }

  return newArr;
}
