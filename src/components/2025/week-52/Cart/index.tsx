"use client";

import Image from "next/image";
import { useProductCategory } from "../ProductCategoryFilter/store";
import styles from "./styles.module.css";
import { ProductCounter } from "./components/ProductCounter";
import { PageTitle } from "../ProductCategoryFilter";
import Link from "next/link";

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
    <>
      <PageTitle title="Apparel Collection" />
      <section className={`${styles.container} ${cart.length <= 0 && styles.center}`}>
        <div className={styles.items_list}>
          {
            cart.length > 0 && <h3 className={styles.section_title} data-counter={cart.length}>Shopping Cart</h3>
          }
          {
            cart.length <= 0 && <p className={styles.empty_state}>No items in your cart</p>
          }
          {
            cart.length > 0 && cart.map(product => (
              <div key={product.id} className={styles.cart_item}>
                <div>
                  <Image
                    src={product.image.src}
                    width={product.image.width}
                    height={product.image.height}
                    alt={product.image.alt}
                    className={styles.image}
                  />
                </div>
                <div className={styles.name_container}>
                  <h3>{product.name}</h3>
                  <span className={styles.color}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rainbow-icon lucide-rainbow"><path d="M22 17a10 10 0 0 0-20 0" stroke="red"/><path d="M6 17a6 6 0 0 1 12 0" stroke="green"/><path d="M10 17a2 2 0 0 1 4 0" stroke="blue"/></svg> {product.color}</span>
                  <span className={styles.size}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 156 168)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> {product.size}</span>
                </div>
                <div className={styles.counter_container}>
                  <ProductCounter {...product} />
                </div>
                <div className={styles.price_container}>
                  <span>{product.currency}{Math.floor(product.price)}</span>
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
            <h3 className={styles.value}>${totalCost()}</h3>
            <div className={`${styles.box} ${styles.subtotal}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-closed-caption-icon lucide-closed-caption"><path d="M10 9.17a3 3 0 1 0 0 5.66"/><path d="M17 9.17a3 3 0 1 0 0 5.66"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
              <span className={styles.label}>Subtotal</span>
              <span className={styles.value}>${calculateSubtotal()}</span>
            </div>
            <div className={`${styles.box} ${styles.shipping_fee}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
              <span className={styles.label}>Shipping Fee</span>
              <span className={styles.value}>$9.99</span>
            </div>
            <div className={`${styles.box} ${styles.shipping_fee} ${styles.total}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              <span className={styles.label}>Total</span>
              <span className={styles.value}>${totalCost()}</span>
            </div>
            <Link href="#" className={styles.button_checkout}>Checkout</Link>
          </div>
        }
      </section>
    </>
  )
}