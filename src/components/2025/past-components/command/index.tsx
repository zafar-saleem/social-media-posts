"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";

const ICONS = {
  search: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzAgMTMwIDEzMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==",
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzAgMTMwIDEzMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  expand: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzAgMTMwIDEzMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTItaWNvbiBsdWNpZGUtbWF4aW1pemUtMiI+PHBhdGggZD0iTTE1IDNoNnY2Ii8+PHBhdGggZD0ibTIxIDMtNyA3Ii8+PHBhdGggZD0ibTMgMjEgNy03Ii8+PHBhdGggZD0iTTkgMjFIM3YtNiIvPjwvc3ZnPg==",
}

export const Command = () => {
  const [hasValue, setHasValue] = React.useState<string>("");
  const inputRef = React.useRef(null);

  return (
    <div className={styles.search}>
      <Image
        src={ICONS.search}
        width={20}
        height={20}
        alt=""
        className={styles.search_icon}
      />
      <input
        type="text"
        className={`${styles.search_field}`}
        ref={inputRef}
        placeholder="How can I help you, Zafar?"
        onChange={(event) => setHasValue(event.target.value)}
      />
      <div className={styles.actions}>
        <div className={styles.search_values}>
          <button className={`
            ${styles.btn}
            ${hasValue !== "" ? styles.show : styles.hide}`}
            onClick={() => {
              inputRef.current.value = "";
              setHasValue("");
            }}
          > 
            <Image
              src={ICONS.close}
              width={20}
              height={20}
              alt=""
            />
          </button>
          <button
            className={`
              ${styles.btn} ${styles.btn_key_close}
              ${hasValue === "" ? styles.show : styles.hide}`}
            >
              ESC
          </button>
        </div>
        <div>
          <button className={styles.btn}> 
            <Image
              src={ICONS.expand}
              width={18}
              height={18}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  )
}
