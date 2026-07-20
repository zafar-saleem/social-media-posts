"use client";

import React from "react";
import styles from "./invoice.module.css";
import Image from "next/image";

const initialState = {
  people: "",
  subject: "",
  due: "",
  currency: "＄USD",
  item_name: "",
  qty: 1,
  tax: "",
  coupon: "",
  discount: "",
  opt_terms: "",
  opt_attachments: "",
  opt_notes: "",
  opt_footer: "",
  total: 0,
  subtotal: 0,
  item_price: 125.00,
  amount_due: 125.00,
}

export const Invoice = () => {
  const [invoice, setInvoice] = React.useState(initialState);

  return (
    <div className={styles.container}>
      <form className={styles.invoice_form}>
        <h1>Invoice Details</h1>
        <div className={styles.form_block}>
          <label>People</label>
          <div className={styles.people_wrapper}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgb(141 146 153)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-user-round-icon lucide-square-user-round"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
            <div className={styles.consumer}>
              <span className={styles.consumer_name}>Zafar Saleem</span>
              <span className={styles.consumer_email}>zafar@email.com</span>
            </div>
            <span className={styles.badge}>On Arto+</span>
            <button className={styles.button_edit}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(141 146 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
            </button>
          </div>
        </div>

        <div className={styles.form_block}>
          <label>Subject</label>
          <input type="text" onChange={(event) => {
            setInvoice({
              ...invoice,
              subject: event.target.value,
            })
          }} />
        </div>

        <div className={styles.form_block}>
          <label>Due Date</label>
          <input type="date" onChange={(event) => {
            setInvoice({
              ...invoice,
              due: event.target.value,
            })
          }} defaultValue={`AS`} />
        </div>

        <div className={styles.form_block}>
          <label>Currency</label>
          <select className={styles.currency} onChange={(event) => {
            setInvoice({
              ...invoice,
              currency: event.target.value,
            })
          }}>
            <button>
              <selectedcontent></selectedcontent>
            </button>
            <optgroup>
              <option>＄USD</option>
              <option>€ Euro</option>
              <option>£ British Pounds</option>
            </optgroup>
          </select>
        </div>
        <h2>Product</h2>
        <div className={styles.product}>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Tax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.item}>
                    <Image
                      src="https://images.stockcake.com/public/e/0/7/e07b1556-c209-4e0d-a15b-ab01e7ad6900_large/traditional-baby-collection-stockcake.jpg"
                      width={25}
                      height={25}
                      alt=""
                    />
                    <div className={styles.item_details}>
                      <span>Summer Edition</span>
                      <span>{invoice.item_price} {invoice.currency}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" defaultValue={invoice.qty} onChange={(event) => {
                    if (!event.target.value) return;

                    setInvoice({
                      ...invoice,
                      qty: event.target.valueAsNumber,
                      amount_due: invoice.item_price * event.target.valueAsNumber
                    })
                  }} />
                </td>
                <td>
                  <select onChange={(event) => {
                    setInvoice({
                      ...invoice,
                      tax: event.target.value,
                      amount_due: invoice.item_price * (1 - parseFloat(`0.${event.target.value}`)),
                    })
                  }}>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                  </select>
                </td>
                <td>
                  <button>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(141 146 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className={styles.button_new} type="button">
            <span>📝</span> <span>Add New Line</span>
          </button>
        </div>
        <div className={styles.discounts}>
          <label>
            <input type="checkbox" />
            <span>Add Coupon</span>
          </label>
          <div>
            <label>
              <input type="checkbox" className={styles.check_discount} />
              <span>Add Discount</span>
            </label>
            <select onChange={(event) => {
              setInvoice({
                ...invoice,
                discount: event.target.value,
                amount_due: invoice.item_price * (1 - parseFloat(`0.${event.target.value}`))
              })
            }}>
              <optgroup>
                <label>Summer Sale 10th</label>
                <option value={10}>10% Discount</option>
              </optgroup>
              <optgroup>
                <label>2% Only for first 100 buyers</label>
                <option value={2}>2nd Anniversary (2%)</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className={styles.options}>
          <h3>Additional Options</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" />
                <span>Terms & conditions</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>Attachments</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>Customer Notes</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>Footer</span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.controls}>
          <button type="button" className={styles.button_cancel}>Cancel</button>
          <button type="button" className={styles.button_send}>Send Invoice</button>
        </div>
      </form>
      
      
      
      
      <div className={styles.invoice_preview}>
        <h1>Preview</h1>
        <div className={styles.block}>
          <div className={`${styles.header} ${styles.box}`}>
            <span>INV2132-432-XND</span>
          </div>
          <div className={styles.box}>
            <span className={styles.label}>Due Date</span>
            <span>{invoice.due || "No Due Date Provided Yet"}</span>
          </div>
          <div className={styles.box}>
            <span className={styles.label}>Subject</span>
            <span>{invoice?.subject || "No Invoice Subject Provided Yet"}</span>
          </div>
          <div className={styles.box}>
            <span className={styles.label}>Billed To</span>
            <span>Zafar Saleem</span>
          </div>
          <div className={styles.box}>
            <span className={styles.label}>Currency</span>
            <span>{invoice.currency || "No Currency Selected Yet"}</span>
          </div>

          <div className={styles.table_container}>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className={styles.item}>
                      <Image
                        src="https://images.stockcake.com/public/e/0/7/e07b1556-c209-4e0d-a15b-ab01e7ad6900_large/traditional-baby-collection-stockcake.jpg"
                        width={25}
                        height={25}
                        alt=""
                      />
                      <div className={styles.item_details}>
                        <span>Summer Edition</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {invoice.qty}
                  </td>
                  <td>{invoice.currency.substring(0, 1)} {invoice.item_price}</td>
                  <td>{invoice.currency.substring(0, 1)} {invoice.amount_due}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.total_container}>
            <div>
              <span className={styles.label}>Tax</span>
              <span className={styles.value}>{invoice.tax}%</span>
            </div>
            <div>
              <span className={styles.label}>Discount</span>
              <span className={styles.value}>{invoice.discount}%</span>
            </div>
            <div>
              <span className={styles.label}>Total</span>
              <span className={styles.value}>{invoice.currency.substring(0, 1)} {invoice.amount_due}</span>
            </div>
            <div>
              <span className={styles.label}>Amount Due</span>
              <span className={styles.value}>{invoice.currency.substring(0, 1)} {invoice.amount_due}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}