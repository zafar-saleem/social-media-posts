"use client";

import React from "react";
import styles from "./button.module.css";
import Image from "next/image";

export const SplitButton = () => {
  const [type, setType] = React.useState("pdf");
  const popoverRef = React.useRef(null);

  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <span className={styles.btn_label}>Export as </span> 
        <span className={`${styles.btn_type}`}>{type}</span>
      </button>
      <span className={styles.divider} />
      <button className={`${styles.btn_reveal_types} ${styles.btn}`} popoverTarget="menu">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24taWNvbiBsdWNpZGUtY2hldnJvbi1kb3duIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4="
          width={15}
          height={12}
          alt=""
        />
      </button>
      <ul popover="auto" id="menu" className={styles.btn_menu} ref={popoverRef}>
        <li>
          <button
            onClick={() => {
              setType("png");
              popoverRef?.current.hidePopover();
            }}
            popoverTargetAction="hide"
          >
            PNG
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setType("jpg");
              popoverRef?.current.hidePopover();
            }}
            popoverTargetAction="hide"
          >
            JPG
          </button>
        </li>
        <li>
          <button onClick={() => {
              setType("pdf");
              popoverRef?.current.hidePopover(); 
            }}
            popoverTargetAction="hide"
          >
            PDF
          </button>
        </li>
      </ul>
    </div>
  )
}