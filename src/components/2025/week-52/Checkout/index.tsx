"use client";

import { PageTitle } from "../ProductCategoryFilter";
import { CardDetails } from "./components/Payment";
import { ShippingAddress } from "./components/ShippingAddress";
import { Summary } from "./components/summary";
import styles from "./styles.module.css";

export const Checkout = () => {
  return (
    <section className={styles.container}>
      <PageTitle title="Apparel Collection" />
      <h3 className={styles.page_title}>Checkout</h3>
      <div className={styles.grid_container}>
        <form className={styles.checkout_form}>
          <ShippingAddress />
          <CardDetails />
          <button className={styles.checkout_button}>Complete Payment</button>
        </form>
        <Summary />
      </div>
    </section>
  )
}
