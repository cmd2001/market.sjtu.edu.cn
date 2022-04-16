import axios from 'axios';

export default async function postForm(params: {
  url: string;
  uuid: string;
}): Promise<Boolean> {
  const formData = new FormData();
  formData.append('busScheduleId', params.uuid);
  try {
    const res = await axios.post(params.url, formData);
    return res.status !== 500;
  } catch (e) {
    return false;
  }
}
