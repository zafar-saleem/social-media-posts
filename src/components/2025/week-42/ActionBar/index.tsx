"use client";

import React from "react";
import styles from "./ActionBar.module.css";
import Image from "next/image";

const People = {
  head_labels: [
    {
      text: "Name",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>,
    },
    {
      text: "Email",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>,
    },
    {
      text: "Company",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>,
    },
    {
      text: "Created",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus-icon lucide-calendar-plus"><path d="M16 19h6"/><path d="M16 2v4"/><path d="M19 16v6"/><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"/><path d="M3 10h18"/><path d="M8 2v4"/></svg>,
    }
  ],
  values: [
    {
      id: 1,
      name: "Alex",
      email: "alex@email.com",
      company: {
        logo: "https://www.vectorlogo.zone/logos/att/att-icon.svg",
        name: "AT&T"
      },
      created_at: "Jun 11",
    },
    {
      id: 2,
      name: "Akio",
      email: "akio@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/sony-2.svg",
        name: "Sony"
      },
      created_at: "Oct 17",
    },
    {
      id: 3,
      name: "Bell",
      email: "bell@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/vmware-1.svg",
        name: "VMWare"
      },
      created_at: "Dec 03",
    },
    {
      id: 4,
      name: "Marc",
      email: "marc@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/autodesk-4.svg",
        name: "Autodesk"
      },
      created_at: "Feb 21",
    },
    {
      id: 5,
      name: "John",
      email: "john@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/mag-magic.svg",
        name: "General Magic"
      },
      created_at: "Jan 16",
    },
    {
      id: 6,
      name: "Diane",
      email: "diane@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/apple-13.svg",
        name: "Apple"
      },
      created_at: "Jul 26",
    },
    {
      id: 7,
      name: "Zafar",
      email: "zafar@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
        name: "Google"
      },
      created_at: "Apr 22",
    },
    {
      id: 8,
      name: "Saleem",
      email: "saleem@email.com",
      company: {
        logo: "https://cdn.worldvectorlogo.com/logos/logo-amazon.svg",
        name: "Amazon"
      },
      created_at: "May 12",
    },
  ]
}

export const ActionBar = () => {
  const [selected, setSelected] = React.useState(0);

  console.log(selected);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th className={styles.head_column}></th>
            {
              People.head_labels.map((label, index) => (
                <React.Fragment  key={index}>
                  <th className={styles.head_column}>
                    <div>
                      {label.icon}
                      <span className={styles.label}>{label.text}</span>
                    </div>
                  </th>
                </React.Fragment> 
              ))
            }
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {
            People.values.map((personnal, index) => (
              <tr  key={index}>
                <th className={styles.body_column}>
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      event.target.checked
                        ? setSelected(() => selected + 1)
                        : setSelected(() => selected - 1);
                    }}
                  />
                </th>
                <th className={styles.body_column}>{personnal.name}</th>
                <th className={styles.body_column}>
                  <div className={styles.column_text}>
                    <span className={styles.email_text}>{personnal.email}</span>
                    <button>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers2-icon lucide-layers-2"><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"/><path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/></svg>
                    </button>
                    <span className={styles.button_tooltip}>Copy Email</span>
                  </div>
                </th>
                <th className={`${styles.company_column} ${styles.body_column}`}>
                  <div>
                    <Image
                      src={personnal.company.logo}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span>{personnal.company.name}</span>
                  </div>
                </th>
                <th className={styles.body_column}>{personnal.created_at}</th>
              </tr> 
            ))
          }
        </tbody>
      </table>
      <div className={`${styles.action_bar} ${selected > 0 && styles.reveal}`}>
        <div>
          <span>{selected} Selected</span>
          <button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <button className={styles.button_export}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
          <span className={styles.button_label}>Export</span>
        </button>
        <button className={styles.button_delete}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          <span className={styles.button_label}>Delete</span>
        </button>
      </div>
    </div>
  )
}