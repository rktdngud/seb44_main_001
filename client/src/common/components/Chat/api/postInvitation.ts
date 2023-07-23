import axios from 'axios';

export default async function postInvitation(
  url: string,
  data: { memberId: number; roomId: number },
) {
  try {
    const accessToken = localStorage.getItem('Authorization');
    const refreshToken = localStorage.getItem('RefreshToken');

    const headers = {
      'ngrok-skip-browser-warning': '69420',
      Authorization: accessToken,
      Refresh: refreshToken,
    };

    const res = await axios.post(url, data, { headers });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}