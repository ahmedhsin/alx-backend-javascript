export default function cleanSet(set, string) {
  if (string === '') return '';
  const arr = Array.from(set);
  const answer = arr.map((itm) => {
    if (itm.startsWith(string)) {
      return itm.replace(string, '');
    }
    return '';
  });
  return answer.filter((i) => i !== '').join('-');
}
