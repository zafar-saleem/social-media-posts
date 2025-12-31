"use client";

import Image from "next/image";
import { useProductCategory } from "../ProductCategoryFilter/store";
import styles from "./styles.module.css";
import { ProductCounter } from "./components/ProductCounter";

export const Cart = () => {
  const cart = useProductCategory((state) => state.cart);
  const setCart = useProductCategory((state) => state.setCart);

  const deleteCartItem = (id: number) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const calculateSubtotal = () => {
    let price: number;

    return cart.reduce((combinator, item) => {
      if (item.quantity > 1) {
        price = item.price * item.quantity;
        return parseInt(combinator + price);
      }

      return parseInt(combinator + item.price);
    }, 0);
  }

  const totalCost = () => {
    return calculateSubtotal() - 9.99;
  }

  return (
    <section className={`${styles.container} ${cart.length <= 0 && styles.center}`}>
      <div className={styles.items_list}>
        {cart.length > 0 && <h2 className={styles.page_title}>Items In Your Cart</h2>}
        {
          cart.length <= 0 && <p className={styles.empty_state}>No items in your cart</p>
        }
        {
          cart.length > 0 && cart.map(product => (
            <div key={product.id} className={styles.cart_item}>
              <Image
                src={product.image.src}
                width={product.image.width}
                height={product.image.height}
                alt={product.image.alt}
                className={styles.image}
              />
              <div>
                <h3>{product.name}</h3>
                <span>{product.color}</span>
                <span>{product.currency}{Math.floor(product.price)}</span>
                <ProductCounter {...product} />
              </div>
              <button
                className={styles.button_delete}
                onClick={() => deleteCartItem(product.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          ))
        }
      </div>
      {
        cart.length > 0 && <div className={styles.aggregation_container}>
          <div className={`${styles.box} ${styles.subtotal}`}>
            <span className={styles.label}>Subtotal</span>
            <span className={styles.value}>${calculateSubtotal()}</span>
          </div>
          <div className={`${styles.box} ${styles.shipping_fee}`}>
            <span className={styles.label}>Shipping Fee</span>
            <span className={styles.value}>$9.99</span>
          </div>
          <div className={`${styles.box} ${styles.shipping_fee}`}>
            <span className={styles.label}>Total</span>
            <span className={styles.value}>${totalCost()}</span>
          </div>
          <button className={styles.button_checkout}>Checkout</button>
        </div>
      }
    </section>
  )
}