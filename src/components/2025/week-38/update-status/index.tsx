"use client";

import Link from "next/link";
import styles from "./status.module.css";
import React from "react";

export const UpdateStatus = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.shopped_item}>
        <details className={styles.shopped_details} open>
          <summary className={styles.shopped_summary}>
            <div>
              <span className={styles.icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20 20 20)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
              <span className={styles.shopped_title}>Acme Corp (Operations)</span>
              <ButtonStatus id="acme-id" />
            </div>
            <div className={`${styles.secondary_text}`}>
              <span className={styles.shopped_order}>ORD_1043</span>
              <span className={styles.shopped_timestamp}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                </span>
                <span>Aug 27, 2024</span>
              </span>
              <span className={styles.shopped_value}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                </span>
                <span>$142.93</span>
              </span>
            </div>
          </summary>
          <div className={styles.shopped_itemdetails}>
            <div className={styles.item_details}>
              <div className={styles.item_titles}>
                <span className={styles.item_label}>Item</span>
                <span className={styles.item_value}>Price</span>
              </div>
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Stainless Steel Water Bottle</span>
                  <span className={styles.price}>$72.00</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 3</span> <span className={styles.separator} /> <span className={styles.per_item}>$24.00 each</span>
                </div>
              </div>
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Bamboo Notebook</span>
                  <span className={styles.price}>$64.95</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 5</span> <span className={styles.separator} /> <span className={styles.per_item}>$12.99 each</span>
                </div>
              </div>
              
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Gift Wrap</span>
                  <span className={styles.price}>$5.98</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 2</span> <span className={styles.separator} /> <span className={styles.per_item}>$2.99 each</span>
                </div>
              </div>
              
              
              
              <div className={`${styles.subtotal} ${styles.item_name}`}>
                <div>
                  <span className={`${styles.secondary_text} ${styles.item_label}`}>Subtotal</span>
                  <span className={styles.price}>$142.93</span>
                </div>
              </div>
            </div>



            <div className={styles.customer_details}>
              <div>
                <span className={`${styles.secondary_text} ${styles.customer_label}`}>Customer</span>
                <span className={styles.customer_name}>Acme Corp (Operations)</span>
                <Link href="">ops@acme.com</Link>
              </div>
              
              <div>
                <span className={`${styles.secondary_text}`}>Shipping Address</span>
                <span className={`${styles.tertiary_text}`}>123 Market St, CA 12332</span>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Tags</span>
                <div>
                  <span className={styles.tag}>wholesale</span>
                  <span className={styles.tag}>priority</span>
                </div>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Notes</span>
                <span className={`${styles.tertiary_text}`}>Customer requested eco-friendly packaging.</span>
              </div>
            </div>
          </div>
        </details>
      </li>



      <li className={styles.shopped_item}>
        <details className={styles.shopped_details}>
          <summary className={styles.shopped_summary}>
            <div>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20 20 20)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
              <span className={styles.shopped_title}>Bright Studio</span>
              <ButtonStatus id="bright-id" />
            </div>
            <div className={`${styles.secondary_text}`}>
              <span className={styles.shopped_order}>ORD_1043</span>
              <span className={styles.shopped_timestamp}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                </span>
                <span>Aug 27, 2024</span>
              </span>
              <span className={styles.shopped_value}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                </span>
                <span>$142.93</span>
              </span>
            </div>
          </summary>
          <div className={styles.shopped_itemdetails}>
            <div className={styles.item_details}>
              <div className={styles.item_titles}>
                <span className={styles.item_label}>Item</span>
                <span className={styles.item_value}>Price</span>
              </div>
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Stainless Steel Water Bottle</span>
                  <span className={styles.price}>$72.00</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 3</span> <span className={styles.separator} /> <span className={styles.per_item}>$24.00 each</span>
                </div>
              </div>
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Bamboo Notebook</span>
                  <span className={styles.price}>$64.95</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 5</span> <span className={styles.separator} /> <span className={styles.per_item}>$12.99 each</span>
                </div>
              </div>
              
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Gift Wrap</span>
                  <span className={styles.price}>$5.98</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 2</span> <span className={styles.separator} /> <span className={styles.per_item}>$2.99 each</span>
                </div>
              </div>
              
              
              
              <div className={`${styles.subtotal} ${styles.item_name}`}>
                <div>
                  <span className={`${styles.secondary_text} ${styles.item_label}`}>Subtotal</span>
                  <span className={styles.price}>$142.93</span>
                </div>
              </div>
            </div>



            <div className={styles.customer_details}>
              <div>
                <span className={`${styles.secondary_text} ${styles.customer_label}`}>Customer</span>
                <span className={styles.customer_name}>Acme Corp (Operations)</span>
                <Link href="">ops@acme.com</Link>
              </div>
              
              <div>
                <span className={`${styles.secondary_text}`}>Shipping Address</span>
                <span className={`${styles.tertiary_text}`}>123 Market St, CA 12332</span>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Tags</span>
                <div>
                  <span className={styles.tag}>wholesale</span>
                  <span className={styles.tag}>priority</span>
                </div>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Notes</span>
                <span className={`${styles.tertiary_text}`}>Customer requested eco-friendly packaging.</span>
              </div>
            </div>
          </div>
        </details>
      </li>
      
      
      
      
      
      
      <li className={styles.shopped_item}>
        <details className={styles.shopped_details}>
          <summary className={styles.shopped_summary}>
            <div>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20 20 20)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
              <span className={styles.shopped_title}>Lina Park</span>
              <ButtonStatus id="lina-id" />
            </div>
            <div className={`${styles.secondary_text}`}>
              <span className={styles.shopped_order}>ORD_1043</span>
              <span className={styles.shopped_timestamp}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                </span>
                <span>Aug 27, 2024</span>
              </span>
              <span className={styles.shopped_value}>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 109)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                </span>
                <span>$142.93</span>
              </span>
            </div>
          </summary>
          <div className={styles.shopped_itemdetails}>
            <div className={styles.item_details}>
              <div className={styles.item_titles}>
                <span className={styles.item_label}>Item</span>
                <span className={styles.item_value}>Price</span>
              </div>
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Stainless Steel Water Bottle</span>
                  <span className={styles.price}>$72.00</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 3</span> <span className={styles.separator} /> <span className={styles.per_item}>$24.00 each</span>
                </div>
              </div>
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Bamboo Notebook</span>
                  <span className={styles.price}>$64.95</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 5</span> <span className={styles.separator} /> <span className={styles.per_item}>$12.99 each</span>
                </div>
              </div>
              
              
              
              
              <div className={styles.item_name}>
                <div>
                  <span className={styles.item_label}>Gift Wrap</span>
                  <span className={styles.price}>$5.98</span>
                </div>
                <div className={`${styles.secondary_text}`}>
                  <span className={styles.quantity}>Qty 2</span> <span className={styles.separator} /> <span className={styles.per_item}>$2.99 each</span>
                </div>
              </div>
              
              
              
              <div className={`${styles.subtotal} ${styles.item_name}`}>
                <div>
                  <span className={`${styles.secondary_text} ${styles.item_label}`}>Subtotal</span>
                  <span className={styles.price}>$142.93</span>
                </div>
              </div>
            </div>



            <div className={styles.customer_details}>
              <div>
                <span className={`${styles.secondary_text} ${styles.customer_label}`}>Customer</span>
                <span className={styles.customer_name}>Acme Corp (Operations)</span>
                <Link href="">ops@acme.com</Link>
              </div>
              
              <div>
                <span className={`${styles.secondary_text}`}>Shipping Address</span>
                <span className={`${styles.tertiary_text}`}>123 Market St, CA 12332</span>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Tags</span>
                <div>
                  <span className={styles.tag}>wholesale</span>
                  <span className={styles.tag}>priority</span>
                </div>
              </div>

              <div>
                <span className={`${styles.secondary_text}`}>Notes</span>
                <span className={`${styles.tertiary_text}`}>Customer requested eco-friendly packaging.</span>
              </div>
            </div>
          </div>
        </details>
      </li>
    </ul>
  )
}

const ButtonStatus = ({ id }) => {
  const [status, setStatus] = React.useState("Pending");

  return (
    <>
      <button
        popoverTarget={id}
        className={`${styles.menu_button} ${styles[status]}`}
      >
        <span className={styles.icon} />
        <span>{status}</span>
      </button>
      <ul className={styles.menu} id={id} popover="auto">
        <li>
          <button onClick={() => setStatus("Pending")} className={`${status === "Pending" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(112 82 60)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
            </span>
            <span>Pending</span>
            <span className={styles.icon_active} />
          </button>
        </li>
        <li>
          <button onClick={() => setStatus("Processing")} className={`${status === "Processing" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(79 102 121)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dashed-icon lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
            </span>
            <span>Processing</span>
            <span className={styles.icon_active} />
          </button>
        </li>
        <li>
          <button onClick={() => setStatus("Shipped")} className={`${status === "Shipped" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(55 116 101)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
            </span>
            <span>Shipped</span>
            <span className={styles.icon_active} />
          </button>
        </li>
        <li>
          <button onClick={() => setStatus("Delivered")} className={`${status === "Delivered" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(27 90 24)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check-icon lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
            </span>
            <span>Delivered</span>
            <span className={styles.icon_active} />
          </button>
        </li>
        <li>
          <button onClick={() => setStatus("Cancelled")} className={`${status === "Cancelled" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 31 41)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-slash-icon lucide-circle-slash"><circle cx="12" cy="12" r="10"/><line x1="9" x2="15" y1="15" y2="9"/></svg>
            </span>
            <span>Cancelled</span>
            <span className={styles.icon_active} />
          </button>
        </li>
        <li>
          <button onClick={() => setStatus("Refunded")} className={`${status === "Refunded" && styles.active}`}>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(67 67 67)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-up-left-icon lucide-corner-up-left"><path d="M20 20v-7a4 4 0 0 0-4-4H4"/><path d="M9 14 4 9l5-5"/></svg>
            </span>
            <span>Refunded</span>
            <span className={styles.icon_active} />
          </button>
        </li>
      </ul>
    </>
  )
}
