"use client";
import Image from "next/image";
import styles from "./ride.module.css";
import QRCode from "react-qr-code";
import React from "react";

const SCOOTER = "data:image/png;base64,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";
const RELOAD = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyOSAyOSAyOSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yb3RhdGUtY2N3LWljb24gbHVjaWRlLXJvdGF0ZS1jY3ciPjxwYXRoIGQ9Ik0zIDEyYTkgOSAwIDEgMCA5LTkgOS43NSA5Ljc1IDAgMCAwLTYuNzQgMi43NEwzIDgiLz48cGF0aCBkPSJNMyAzdjVoNSIvPjwvc3ZnPg==";
const DIRECTION = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtcmlnaHQiPjxwYXRoIGQ9Ik0xOCA4TDIyIDEyTDE4IDE2Ii8+PHBhdGggZD0iTTIgMTJIMjIiLz48L3N2Zz4=";
const RANGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig2NCA2NCA2NCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGFydC1uby1heGVzLWdhbnR0LWljb24gbHVjaWRlLWNoYXJ0LW5vLWF4ZXMtZ2FudHQiPjxwYXRoIGQ9Ik04IDZoMTAiLz48cGF0aCBkPSJNNiAxMmg5Ii8+PHBhdGggZD0iTTExIDE4aDciLz48L3N2Zz4=";
const BANK_NOTE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig2NCA2NCA2NCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iYW5rbm90ZS1hcnJvdy11cC1pY29uIGx1Y2lkZS1iYW5rbm90ZS1hcnJvdy11cCI+PHBhdGggZD0iTTEyIDE4SDRhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY1Ii8+PHBhdGggZD0iTTE4IDEyaC4wMSIvPjxwYXRoIGQ9Ik0xOSAyMnYtNiIvPjxwYXRoIGQ9Im0yMiAxOS0zLTMtMyAzIi8+PHBhdGggZD0iTTYgMTJoLjAxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPjwvc3ZnPg==";

export const Ride = () => {
  const [qr_code, setScanQRCode] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Scooter 78-LX-58</span>
        <button className={styles.btn_reload} onClick={() => setScanQRCode(false)}>
          <Image
            src={RELOAD}
            width={15}
            height={15}
            alt=""
          />
        </button>
      </div>
      <div className={styles.contents}>
        <div className={`${qr_code ? styles.slide_up : styles.slide_down} ${styles.media_container}`}>
          <Image
            src={SCOOTER}
            width={66}
            height={66}
            alt=""
          />
        </div>
        <article className={styles.contents_container}>
          <p>
            <Image
              src={RANGE}
              width={12}
              height={12}
              alt=""
            />
            <span>17 km range</span>
          </p>
          <p>
            <Image
              src={BANK_NOTE}
              width={12}
              height={12}
              alt=""
            />
            <span>0.5$ tp start, then 0.05$/min</span>
          </p>
        </article>
      </div>
      <div className={styles.footer}>
        <div className={styles.btn_start}>
          <label className={styles.btn_icon}>
            <Image
              src={DIRECTION}
              width={20}
              height={20}
              alt=""
            />
            <input type="checkbox" className={styles.btn} name="start" defaultChecked={qr_code} />
          </label>
          <span className={styles.btn_label}>Start ride</span>
          <button className={`${styles.qr_code}`} onClick={() => setScanQRCode(true)}>Scan QR Code</button>
        </div>
      </div>
      <div className={`${qr_code ? styles.slide_up : styles.slide_down} ${styles.qr_code_container}`}>
        <QRCode
          size={56}
          style={{ maxWidth: "100%", width: "100%", margin: "auto" }}
          value={`web`}
          viewBox={`0 0 56 56`}
        />
      </div>
    </div>
  )
}