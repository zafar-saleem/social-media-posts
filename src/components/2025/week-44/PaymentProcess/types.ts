export type ComponentTitleProp = {
  title: string;
}

export type ComponentStateProp = ComponentTitleProp & {
  setTitle: (args: any) => void;
}
