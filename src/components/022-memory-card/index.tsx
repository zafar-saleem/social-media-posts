import Image from "next/image";
import styles from "./styles.module.css";

export const MemoryCard = () => {
  return (
    <div className={styles.card_container}>
      <h1>Gallery</h1>
      <div className={styles.card}>
        <figure>
          <Image
            src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg"
            width={150}
            height={150}
            alt=""
          />
          <figcaption>Mountains</figcaption>
        </figure>
        <figure>
          <Image
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
            width={150}
            height={150}
            alt=""
          />
          <figcaption>Lush Mountains</figcaption>
        </figure>
        <figure>
          <Image
            src="https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg"
            width={200}
            height={200}
            alt=""
          />
          <figcaption>Greenfields</figcaption>
        </figure>
      </div>
      <label>
        <input type="checkbox" name="start" className={styles.btn_start} />
        <span className={styles.btn_label_start}>Start</span>
        <span className={styles.btn_label_close}>+</span>
      </label>
    </div>
  )
}
