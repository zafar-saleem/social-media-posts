export type TStates = {
  current_state: {
    text: string,
    icon: any,
  },
  prev_state: {
    text: string,
    icon: any,
  },
  action: string,
}

export type DataProp = {
  icon: string,
  title: string,
  timestamp: string,
  text: string,
  type: string,
  category: string,
  mention: string,
  states: TStates,
}

export type ComponentProps = {
  setFilter: (arg: any) => void;
  data: DataProp[];
}

export type WithDataProps = {
  data: DataProp[];
}
