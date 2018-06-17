export const log = function(...rest: any[]) {
  const date = new Date();
  console.log.apply(null, [`${date.getMinutes()}:${date.getSeconds()}`, ...rest]);
};