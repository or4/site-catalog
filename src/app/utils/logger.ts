import { IS_DEV, DEV_LOG_RENDER, DEV_LOG_CATEGORIES, DEV_LOG_ITEMS } from 'settings';

export const log = function(...rest: any[]) {
  const date = new Date();

  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  const ms = date.getMilliseconds() < 10 ? `00${date.getMilliseconds()}` : date.getMilliseconds() < 100 ? `0${date.getMilliseconds()}` : `${date.getMilliseconds()}`;

  console.log.apply(null, [`${minutes}:${seconds}.${ms}: `, ...rest]);
};

export enum IntendationType {
  start, end
}

export const logIntendation = function(type: IntendationType, ...rest: any[]) {
  const date = new Date();

  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  const ms = date.getMilliseconds() < 10 ? `00${date.getMilliseconds()}` : date.getMilliseconds() < 100 ? `0${date.getMilliseconds()}` : `${date.getMilliseconds()}`;

  console.log.apply(null, [`${type === IntendationType.start ? '\n\n\n' : ''}${minutes}:${seconds}.${ms}: `, ...rest, type === IntendationType.end ? '\n\n\n' : '']);
};

type LogsType = 'render' | 'categories' | 'items';

export const logs = function(type: LogsType, ...rest: any[]) {

  const needlog = type === 'render' && IS_DEV && DEV_LOG_RENDER
    || type === 'categories' && IS_DEV && DEV_LOG_CATEGORIES
    || type === 'items' && IS_DEV && DEV_LOG_ITEMS;

  if (needlog) {
    const date = new Date();

    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    const ms = date.getMilliseconds() < 10 ? `00${date.getMilliseconds()}` : date.getMilliseconds() < 100 ? `0${date.getMilliseconds()}` : `${date.getMilliseconds()}`;

    console.log.apply(null, [`${minutes}:${seconds}.${ms}: `, ...rest]);
  }
};