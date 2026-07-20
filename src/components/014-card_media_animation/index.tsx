import Image from "next/image";
import styles from "./styles.module.css";
import Photo from "../../../app/assets/photos.jpg";

export const CardMediaAnimation = () => {
  return (
    <div className={styles.card_container}>
      <h1 className={styles.card_title}>
        Awesome Light Festival
      </h1>
      <div className={styles.card_media_container}>
        <Image
          className={styles.card_media}
          src={Photo}
          width={300}
          height={200}
          alt="Lights"
        />
      </div>
      <p className={styles.card_contents}>
        Dolor sit amet consectetur adipisicing elit. Consectetur adipisicing elit...
      </p>
      <button className={styles.card_action}>Learn more</button>
    </div>
  )
}