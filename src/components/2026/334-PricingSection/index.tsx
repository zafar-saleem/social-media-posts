import Image from "next/image";
import styles from "./styles.module.css";
import illustration from "./assets/image.png";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <div className={styles.pricing_section}>
      <div className={styles.pricing_box}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
        <span className={styles.box_label}>Our Pricing</span>
      </div>

      <h1 className={styles.pricing_title}>
        <span>One <mark>monthly subscription.</mark></span>
        <span>Full engineering <mark>ownership.</mark></span>
      </h1>

      <p className={styles.pricing_copy}>
        Trusted by fast growing startups and agencies worldwide to deliver production ready solutions every month.
      </p>

      <div className={styles.pricing_block}>
        <div className={styles.block_contents}>
          <div className={styles.contents_title}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
            <span>Let's Talk</span>
          </div>
          <span className={styles.title}>Custom Plans</span>
          <figure className={styles.figure}>
            <Image
              src={illustration}
              width={2000}
              height={2000}
              alt=""
              className={styles.pricing_illustration}
            />
            <figcaption>
              <span>Custom Plans</span>
              <p>Bespoke Solutions and flexible scaling for large organizations</p>
            </figcaption>
          </figure>
          <Link className={styles.ghost_button} href={`#`}>Get a Custom Quote</Link>
          <p className={styles.contents_mark}>
            <mark>Serious engineering.</mark>
            <mark>Simple pricing.</mark>
          </p>
        </div>
        <div className={styles.block_pricing}>
          <span className={styles.block_title}>
            Product Engineering Subscription
          </span>
          <p className={styles.block_price}>
            <span>$6,000 <mark>/ month</mark></span>
            {/* <span>Monthly Subscription</span> */}
          </p>

          <Link href="#" className={styles.button_call}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-outgoing-icon lucide-phone-outgoing"><path d="m16 8 6-6"/><path d="M22 8V2h-6"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
            <span>Book a Free Call</span>
          </Link>
          <span className={styles.micro_copy}>(No commitment required to book)</span>

          <ul className={styles.feature_list}>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>End-to-end Engineering Delivery</span>
            </li>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>Product development, backend & frontend</span>
            </li>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>API Integrations & production-ready systems</span>
            </li>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>Weekly ready progress and continuous shipping</span>
            </li>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>DevOps deployment & ongoing support</span>
            </li>
            <li className={styles.list_item}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <span>Clear communication & full ownership</span>
            </li>
          </ul>
          <span className={styles.ps}>Pause or cancel anytime</span>
        </div>
      </div>
    </div>
  )
}