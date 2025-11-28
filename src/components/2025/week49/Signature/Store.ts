import { create } from "zustand";

type State = {
  buttonLabel: string;
}

type Action = {
  setButtonLabel: (firstName: State['buttonLabel']) => void;
}


export const useButtonLabel = create<State & Action>((set) => ({
  buttonLabel: "Start Signing",
  setButtonLabel: (param: string) => set(() => {
    return { buttonLabel: param };
  }),
}))