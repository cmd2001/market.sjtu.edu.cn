import { Target } from '../constants/targets';
import postForm from './postForm';
import { ListEntity } from './workOnTarget';

export default async function workOnUuid(
  target: Target,
  listEntity: ListEntity,
): Promise<boolean> {
  const storage = window.localStorage;
  const postFormIntervalMin = Number(storage.getItem('postFormIntervalMin'));
  const postFormInvervalMax = Number(storage.getItem('postFormInvervalMax'));
  const postFormRetry = Number(storage.getItem('postFormRetry'));
  console.log(postFormIntervalMin, postFormInvervalMax);
  for (let i = 0; i < postFormRetry; i++) {
    console.log(
      `Trying to Post Data to ${target.postUrl} with UUID ${
        listEntity.id
      } for ${i + 1} time`,
    );
    const res = await postForm({
      url: target.postUrl,
      uuid: listEntity.id,
    });
    if (res) {
      console.log(
        `Successfully Made Appointment for ${target.name} on ${listEntity.startTime} - ${listEntity.endTime}`,
      );
      return true;
    }
    const sleepTime = Math.floor(
      Math.random() * (postFormInvervalMax - postFormIntervalMin) +
        postFormIntervalMin,
    );
    console.log(
      `Failed to Post Data to ${target.postUrl} with UUID ${
        listEntity.id
      } for ${i + 1} time`,
    );
    console.log(`Sleep for ${sleepTime} microseconds`);
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
  }
  console.log(
    `Failed to Make Appointment for ${target.name} on ${listEntity.startTime} - ${listEntity.endTime} after ${postFormRetry} times`,
  );
  return false;
}
