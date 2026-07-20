"use client";

import React from "react";
import styles from "./styles.module.css";

const initialValues = [
  {
    id: 1,
    expense: "Rent",
    method: "Bank Transfer",
    amount: "$2200",
  },
  {
    id: 2,
    expense: "Insurance",
    method: "Credit Card",
    amount: "$2100",
  },
  {
    id: 3,
    expense: "Groceries",
    method: "Cash",
    amount: "$1100",
  },
]

export const DataTable = () => {
  const [data, setData] = React.useState(initialValues);

  return (
    <table className={styles.table}>
      <thead className={styles.table_header}>
        <tr className={styles.header_row}>
          <th className={styles.header_column}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 192)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            <span>Expense</span>
          </th>
          <th className={styles.header_column}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 192)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>
            <span>Methods</span>
          </th>
          <th className={styles.header_column}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 192)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-up-right-icon lucide-square-arrow-up-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8"/><path d="m8 16 8-8"/></svg>
            <span>Amount</span>
          </th>
          <th className={styles.header_column}>
          </th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        {
          data.map(item => (
            <tr key={item.id} className={styles.body_row}>
              <td className={styles.body_column}>
                <span className={styles.text}>{item.expense}</span>
                <form className={styles.form}>
                  <label>
                    <span className={styles.label}>Expenses</span>
                    <input type="text" defaultValue={item.expense} />
                  </label>
                  <label>
                    <span className={styles.label}>Method</span>
                    <input type="text" defaultValue={item.method} />
                  </label>
                  <label>
                    <span className={styles.label}>Amount</span>
                    <input type="text" defaultValue={item.amount} />
                  </label>
                  <div className={styles.actions}>
                    <button type="button">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(120 119 127)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      <span>Cancel</span>
                    </button>
                    <button type="button">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(246 246 247)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                      <span>Done</span>
                    </button>
                  </div>
                </form>
              </td>
              <td className={styles.body_column}>{item.method}</td>
              <td className={styles.body_column}>{item.amount}</td>
              <td>
                <label className={styles.btn_edit}>
                  <input type="checkbox" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                </label>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}