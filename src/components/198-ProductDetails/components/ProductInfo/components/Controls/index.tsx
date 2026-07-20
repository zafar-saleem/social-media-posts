import { useProductCategory } from "@/components/2025/week-52/ProductCategoryFilter/store";
import styles from "./styles.module.css";

export const Controls = ({ product }) => {
  const cart = useProductCategory((state) => state.cart);
  const setCart = useProductCategory((state) => state.setCart);

  const addProductToCard = () => {
    setCart([
      ...cart,
      {
        id: product.id,
        name: product.name,
        currency: product.currecy,
        price: product.price,
        amount: 1,
        image: product.image,
        quantity: 1,
      }
    ]);
  }
  
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.button} ${styles.add_button}`}
        onClick={() => addProductToCard()}
      >
        <span className={styles.button_text}>Add to Cart</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(192 192 192)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
      
      <button
        className={`${styles.button} ${styles.buy_now_button}`}
      >
        <span className={styles.button_text}>Buy It Now</span>
      </button>
      
      <button className={`${styles.button} ${styles.bookmark_button}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(17 17 17)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
      </button>
    </div>
  )
}
