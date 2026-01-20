import Image from "next/image";
import styles from "./styles.module.css";

export const Button = () => {
  return (
    <button className={styles.button}>
      <span>Start your project</span>
    </button>
  )
}
