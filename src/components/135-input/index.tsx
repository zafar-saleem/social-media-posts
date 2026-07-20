"use client";

import React from "react";
import styles from "./input.module.css";
import Link from "next/link";

const Labels = [
  {
    id: 1,
    label: "Phone",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(207 207 207)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>,
  }
]

const Values = [
  {
    id: 1,
    labels_id: 1,
    values: [
      {
        code: "+44",
        number: "111 222233",
      },
      {
        code: "+357",
        number: "999 999999",
      }
    ]
  }
];

const initialValues = (id: number) => Values.filter(num => num.labels_id === id)[0].values;

export const Input = () => {
  return (
    <ul className={styles.list}>
      {
        Labels.map((item, index) => (
          <li key={index} className={styles.list_item}>
            {item.icon}
            <span className={styles.label}>{item.label}</span>
            <button className={styles.value} popoverTarget="phone_input">
              <span className={styles.text}>{`${initialValues(item.id)[0].code} ${initialValues(item.id)[0].number}`}</span> 
              {initialValues(item.id).length > 0 && <span className={styles.additional_values}>+{initialValues(item.id).length - 1}</span>}
              <Tooltip id={item.id} />
            </button>
          </li>
        ))
      }
    </ul>
  )
}

const Tooltip = ({ id }: { id: number }) => {
  const [values] = React.useState(() => initialValues(id));
  
  return (
    <span popover="auto" id="phone_input" className={styles.phone_input}>
      <section>
        <input
          type="tel"
          name="phone"
          placeholder="Start typing phone number..." autoFocus
        />
      </section>
      <ul className={styles.phones_list}>
        {
          values.map(phone => (
            <li key={phone.number}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(207 207 207)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical-icon lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
              <span className={styles.code}>{phone.code}</span> <span className={styles.phone}>{phone.number}</span>
              <Link href="#" className={styles.button_delete}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(207 207 207)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Link>
            </li>
          ))
        }
      </ul>
    </span>
  )
}
