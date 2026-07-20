export type DAY = {
  id: number,
  total: number,
  consumed: number,
}

export type ChildCardType = {
  icon: any,
  label: string,
  completed: string,
  total: number,
  streak: number,
  average: number,
  children: DAY[],
}

export type ProgressType = {
  label: string,
  supporting_text: string,
  completed: {
    label: string,
    value: number,
  },
  average: {
    label: string,
    value: number,
  },
}
