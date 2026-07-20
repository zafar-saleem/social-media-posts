export const scaleValues: any = {
  "0": 1.00,
  "1": 0.97,
  "2": 0.94,
  "3": 0.91,
  "4": 0.88,
  "5": 0.85,
  "6": 0.82,
  "7": 0.79,
  "8": 0.76,
  "9": 0.73,
  "10": 0.70,
};

export const setYAxis = (index: number) => {
  if (index === 0) {
    return 0;
  }

  if (index === 1) {
    return -3;
  }

  return index * -3;
}
