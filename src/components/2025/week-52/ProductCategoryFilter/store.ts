import { create } from "zustand";

import { data } from "./data";

type State = {
  data: any[];
  cart: any[];
  // id: number;
}

type Action = {
  setData: (data: State['data']) => void;
  setCart: (data: State['cart']) => void;
  updateQuantity: (data: State['cart']) => void;
}

export const ProductsList: any = data;

const cart = [

  {
    id: 1,
    name: "Shoreline Hat",
    price: 21.99,
    currency: "$",
    image: {
      src: "https://as1.ftcdn.net/v2/jpg/03/28/90/22/1000_F_328902200_E0jG2bye4pJvQGGlI98PMnAecH9eseOx.jpg",
      width: 2000,
      height: 2000,
      alt: "",
    },
    size: "small",
    color: "Navy Blue",
    quantity: 1,
  },
  {
    id: 2,
    name: "Zephyr Gown",
    price: 43.99,
    currency: "$",
    image: {
      src: "https://t3.ftcdn.net/jpg/03/51/34/08/240_F_351340803_L9IokosgWo3JmeecNaVbpf0z9sMRYZzk.jpg",
      width: 2000,
      height: 2000,
      alt: "",
    },
    size: "medium",
    color: "beige",
    quantity: 1,
  },
  {
    id: 3,
    name: "Aspire Comfortwear",
    price: 67.99,
    currency: "$",
    image: {
      src: "https://as1.ftcdn.net/jpg/00/56/38/12/1000_F_56381206_WRdSYF0TQ8AebaaUaFESsAHQ71LzTp5q.jpg",
      width: 2000,
      height: 2000,
      alt: "",
    },
    size: "medium",
    color: "beige",
    quantity: 1,
  },



  
]

export const useProductCategory = create<State & Action>((set) => ({
  data: data,
  cart: cart,
  setData: (param: any[]) => set(() => {
    return { data: param };
  }),
  setCart: (param: any[]) => set(() => {
    return { cart: param };
  }),
  updateQuantity: (cart: any[]) => set(() => {
    return {
      cart: cart
    }
  })
}))
