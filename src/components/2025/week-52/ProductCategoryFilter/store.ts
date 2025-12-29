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
    quantity: 1,
    currency: "$",
    id: 6,
    image: {
      alt: "",
      height: 2000,
      src: "https://as1.ftcdn.net/jpg/02/75/74/58/1000_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg",
      width: 2000,
    },
    name: "Aspire Comfortwear",
    price: 67.99,
    color: 'beige',
  },
  {
    quantity: 1,
    currency: "$",
    id: 7,
    image: {
      alt: "",
      height: 2000,
      src: "https://as1.ftcdn.net/jpg/02/75/74/58/1000_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg",
      width: 2000,
    },
    name: "Aspire Comfortwear",
    price: 67.99,
    color: 'beige',
  },
  {
    quantity: 1,
    currency: "$",
    id: 8,
    image: {
      alt: "",
      height: 2000,
      src: "https://as1.ftcdn.net/jpg/02/75/74/58/1000_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg",
      width: 2000,
    },
    name: "Aspire Comfortwear",
    price: 67.99,
    color: 'beige',
  }
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
