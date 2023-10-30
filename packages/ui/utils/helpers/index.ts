// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Allow the use of 'any' here because of the nature of the object.
export const isEmptyObj = (obj: Record<any, any>) => {
  return Object.keys(obj).length === 0;
};
