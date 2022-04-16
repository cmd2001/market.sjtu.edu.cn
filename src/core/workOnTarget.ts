import { Target } from '../constants/targets';
import getList from './getList';
import workOnUuid from './workOnUuid';

export interface ListEntity {
  id: string;
  isNonStop: boolean;
  startTime: string;
  endTime: string;
  stateDate: string;
  loginName: string;
  leftSeat: number;
  stopStation: string;
  status: string;
  userAppointmentId: string;
  capacitySeat: number;
  isPublish: boolean;
  busNum: number;
  isBlackList: boolean;
  isAppointmentLimited: boolean;
}

export default async function workOnTarget(params: {
  target: Target;
  date: string;
  log: (data: string) => void;
}) {
  const target = params.target;
  const date = params.date;
  const storage = window.localStorage;
  const getListInterval = Number(storage.getItem('getListInterval'));
  const getListRetry = Number(storage.getItem('getListRetry'));
  let ls: ListEntity[] = [];
  let getListFailureTime = 0;
  while (!ls.length && getListFailureTime < getListRetry) {
    try {
      const res = await getList({
        url: target.getUrl,
        lineType: target.lineType,
        date,
      });
      if (res.status === 200) {
        ls = res.data.entities as ListEntity[];
      }
    } catch (e) {
      params.log(`Invalid Cookie Or Header Settings For ${target.name}`);
      getListFailureTime++;
    } finally {
      await new Promise((resolve) => setTimeout(resolve, getListInterval));
    }
  }
  params.log(`${target.name} list length: ${ls.length}`);
  ls.forEach(async (listEntity) => {
    workOnUuid({ target, listEntity, log: params.log });
  });
}
