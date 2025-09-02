import React from "react";
import styles from "./styles.module.css";

export const ShareInput = () => {
  const [shake, setShake] = React.useState(false);
  console.log(shake);
  return (
    <div className={styles.container}>
      <input
        className={
          `${shake ? styles.shake : ''}
          ${styles.input_field}`
        }
        type="text"
        name="email"
        placeholder="Enter email address"
      />
      <button
        className={styles.btn_shake}
        onClick={() => {
          setShake(!shake);
          setTimeout(() => {
            setShake(false);
          }, 500);
        }}
      >
        Shake
      </button>
    </div>
  )
}