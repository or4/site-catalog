
export type PositionType = 'first' |'middle' |'last';

export const getPosition = (index: number, lastIndex: number): PositionType => {
  const firstIndex = 0;
  if (index === lastIndex) { return 'last' }
  if (index === firstIndex) { return 'first' }
  return 'middle';
};

export const isFirst = (position: PositionType) => position === 'first';
export const isLast = (position: PositionType) => position === 'last';
