"use client";

import { useProductCategory } from "../../../ProductCategoryFilter/store";
import styles from "./styles.module.css";

export const ProductCounter = ({ ...props }) => {
  const updateQuantity = useProductCategory((state) => state.updateQuantity);
  const cart = useProductCategory((state) => state.cart);

  const changeQuantity = (operation: string) => {
    const updatedCart = cart.map((item => {
      if (item.quantity >= 5 && operation === 'add') return item;
      if (item.quantity <= 1 && operation === 'reduce') return item;

      if (item.id != props.id) return item; 

      if (operation === 'add') {
        item.quantity = item.quantity + 1;

        return item;
      }
      
      item.quantity = item.quantity - 1;

      return item;
    }))

    updateQuantity(updatedCart);
  }

  return (
    <div className={styles.product_quantity}>
      <button
        className={`${styles.button} ${styles.button_decrease}`}
        onClick={() => changeQuantity('reduce')}
      >-</button>
      <input type="text" defaultValue={props.quantity} className={`${styles.quantity}`} />
      <button
        className={`${styles.button} ${styles.button_increase}`}
        onClick={() => changeQuantity('add')}
      >+</button>
    </div>
  )
}
