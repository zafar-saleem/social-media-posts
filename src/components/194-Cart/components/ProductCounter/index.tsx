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
      >
        <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
      </button>
      <input type="text" defaultValue={props.quantity} className={`${styles.quantity}`} />
      <button
        className={`${styles.button} ${styles.button_increase}`}
        onClick={() => changeQuantity('add')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      </button>
    </div>
  )
}
