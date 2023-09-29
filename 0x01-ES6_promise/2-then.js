export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
  }).catch(() => Error()).finally(() => console.log('Got a response from the API'));
}
