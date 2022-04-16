import { Target } from '../constants/targets';
import postForm from './postForm';
import { ListEntity } from './workOnTarget';

export default async function workOnUuid(params: {
  target: Target;
  listEntity: ListEntity;
  log: (data: string) => void;
}): Promise<boolean> {
  const target = params.target;
  const listEntity = params.listEntity;
  const storage = window.localStorage;
  const postFormIntervalMin = Number(storage.getItem('postFormIntervalMin'));
  const postFormInvervalMax = Number(storage.getItem('postFormIntervalMax'));
  const postFormRetry = Number(storage.getItem('postFormRetry'));
  for (let i = 0; i < postFormRetry; i++) {
    params.log(
      `Trying to Post Data to ${target.postUrl} with UUID ${
        listEntity.id
      } for ${i + 1} time`,
    );
    const res = await postForm({
      url: target.postUrl,
      uuid: listEntity.id,
    });
    if (res) {
      params.log(
        `Successfully Made Appointment for ${target.name} on ${listEntity.startTime} - ${listEntity.endTime}`,
      );
      return true;
    }
    const sleepTime = Math.floor(
      Math.random() * (postFormInvervalMax - postFormIntervalMin) +
        postFormIntervalMin,
    );
    params.log(
      `Failed to Post Data to ${target.postUrl} with UUID ${
        listEntity.id
      } for ${i + 1} time`,
    );
    params.log(`Sleep for ${sleepTime} microseconds for UUID ${listEntity.id}`);
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
  }
  params.log(
    `Failed to Make Appointment for ${target.name} on ${listEntity.startTime} - ${listEntity.endTime} after ${postFormRetry} times`,
  );
  return false;
}
