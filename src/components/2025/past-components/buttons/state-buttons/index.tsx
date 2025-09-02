import Image from "next/image";
import styles from "./state-buttons.module.css";

export const ButtonsWithState = () =>  {
  return (
    <div className={styles.container}>
      <button className={`${styles.pending} ${styles.flex} ${styles.button}`}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYmNiNGEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbG9jay1hcnJvdy11cC1pY29uIGx1Y2lkZS1jbG9jay1hcnJvdy11cCI+PHBhdGggZD0iTTEzLjIyOCAyMS45MjVBMTAgMTAgMCAxIDEgMjEuOTk0IDEyLjMzOCIvPjxwYXRoIGQ9Ik0xMiA2djZsMS41NjIuNzgxIi8+PHBhdGggZD0ibTE0IDE4IDQtNCA0IDQiLz48cGF0aCBkPSJNMTggMjJ2LTgiLz48L3N2Zz4="
          width={20}
          height={20}
          alt="Pending"
          className={styles.icon}
        />
        <span className={styles.label}>Pending</span>
      </button>

      <button className={`${styles.submitted} ${styles.flex} ${styles.button}`}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4YWEyZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZW5kLWljb24gbHVjaWRlLXNlbmQiPjxwYXRoIGQ9Ik0xNC41MzYgMjEuNjg2YS41LjUgMCAwIDAgLjkzNy0uMDI0bDYuNS0xOWEuNDk2LjQ5NiAwIDAgMC0uNjM1LS42MzVsLTE5IDYuNWEuNS41IDAgMCAwLS4wMjQuOTM3bDcuOTMgMy4xOGEyIDIgMCAwIDEgMS4xMTIgMS4xMXoiLz48cGF0aCBkPSJtMjEuODU0IDIuMTQ3LTEwLjk0IDEwLjkzOSIvPjwvc3ZnPg=="
          width={20}
          height={20}
          alt="Pending"
          className={styles.icon}
        />
        <span className={styles.label}>Submitted</span>
      </button>

      <button className={`${styles.success} ${styles.flex} ${styles.button}`}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2ZmUyOGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2stYmlnLWljb24gbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg=="
          width={20}
          height={20}
          alt="Success"
          className={styles.icon}
        />
        <span className={styles.label}>Success</span>
      </button>
      
      <button className={`${styles.failed} ${styles.flex} ${styles.button}`}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYjliOWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUteC1pY29uIGx1Y2lkZS1jaXJjbGUteCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJtMTUgOS02IDYiLz48cGF0aCBkPSJtOSA5IDYgNiIvPjwvc3ZnPg=="
          width={20}
          height={20}
          alt="Failed"
          className={styles.icon}
        />
        <span className={styles.label}>Failed</span>
      </button>

      <button className={`${styles.expired} ${styles.flex} ${styles.button}`}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNiZWJmYmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbG9jay1pY29uIGx1Y2lkZS1jbG9jayI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0Ii8+PC9zdmc+"
          width={20}
          height={20}
          alt="Expired"
          className={styles.icon}
        />
        <span className={styles.label}>Expired</span>
      </button>
    </div>
  )
}