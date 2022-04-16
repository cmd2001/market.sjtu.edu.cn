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

export default async function workOnTarget(target: Target, date: string) {
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
      if (res.status === 401) {
        throw new Error(
          `Invalid Cookie Or Header Settings For ${target.getUrl}`,
        );
      }
      if (res.status === 200) {
        ls = res.data.entities as ListEntity[];
      }
    } catch (e) {
      getListFailureTime++;
    } finally {
      await new Promise((resolve) => setTimeout(resolve, getListInterval));
    }
  }
  console.log(ls);
  ls.forEach(async (listEntity) => {
    workOnUuid(target, listEntity);
  });
}
