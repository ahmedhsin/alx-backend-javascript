import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      for (let i = 0; i < res.length; i += 1) {
        const tmp = { ...res[i] };
        if (res[i].status === 'fulfilled') res[i] = { status: tmp.status, value: tmp.value };
        else res[i] = { status: tmp.status, value: String(tmp.reason) };
      }
      console.log(res);
      return res;
    });
}
