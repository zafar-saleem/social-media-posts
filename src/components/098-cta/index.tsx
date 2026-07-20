"use client";

import React from "react";
import styles from "./cta.module.css";

export const CTA = () => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const emailRef = React.useRef(null);

  return (
    <button className={styles.button}>
      <span className={styles.button_icon}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(248 248 248)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
      </span>
      <div>
        <span className={styles.button_label}>Get in touch</span>
        <input type="email" className={styles.button_email} ref={emailRef} defaultValue="zafarsaleem3@gmail.com"/>
      </div>
      <button
        className={styles.button_copy}
        onClick={() => {
          navigator.clipboard.writeText(emailRef?.current?.value);
          setIsCopied(!isCopied);
        }}
      >
        {isCopied ? 'Done' : 'Copy'}
      </button>
    </button>
  )
}