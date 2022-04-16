import axios from 'axios';

export default async function getList(params: {
  url: string;
  lineType: string;
  date: string;
}) {
  const res = await axios.get(params.url, {
    params: { lineType: params.lineType, date: params.date },
  });
  return res;
}
