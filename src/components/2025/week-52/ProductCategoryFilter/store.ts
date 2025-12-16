import { create } from "zustand";

import { data } from "./data";

type State = {
  data: any[];
}

type Action = {
  setData: (data: State['data']) => void;
}

export const ProductsList: any = data;

export const useProductCategory = create<State & Action>((set) => ({
  data: data,
  setData: (param: any[]) => set(() => {
    return { data: param };
  }),
}))
