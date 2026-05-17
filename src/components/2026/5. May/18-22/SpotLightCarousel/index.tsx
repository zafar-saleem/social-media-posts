import Image from "next/image";
import styles from "./styles.module.css";

const IMAGES = [
  {
    id: 1,
    src: "",
  },
  {
    id: 2,
    src: "",
  },
  {
    id: 3,
    src: "",
  },
  {
    id: 4,
    src: "",
  },
  {
    id: 5,
    src: "",
  },
  {
    id: 6,
    src: "",
  },
]

export const SpotlightCarousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_image}>
        <Image
          src={`https://images.pexels.com/photos/33233704/pexels-photo-33233704.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_1}`}
        />
        <Image
          src={`https://images.pexels.com/photos/4480895/pexels-photo-4480895.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_2}`}
        />
        <Image
          src={`https://images.pexels.com/photos/9957253/pexels-photo-9957253.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_3}`}
        />
        <Image
          src={`https://images.pexels.com/photos/31199652/pexels-photo-31199652.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_4}`}
        />
        <Image
          src={`https://images.pexels.com/photos/17209154/pexels-photo-17209154.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_5}`}
        />
        <Image
          src={`https://images.pexels.com/photos/30462811/pexels-photo-30462811.jpeg`}
          width={1000}
          height={1000}
          alt=""
          className={`${styles.thumbnail_label_6}`}
        />
      </div>
      <ul className={styles.carousel_thumbnails}>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_1}`}>
            <input type="radio" name="thumbnail" defaultChecked />
            <Image
              src={`https://images.pexels.com/photos/33233704/pexels-photo-33233704.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_2}`}>
            <input type="radio" name="thumbnail" />
            <Image
              src={`https://images.pexels.com/photos/4480895/pexels-photo-4480895.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_3}`}>
            <input type="radio" name="thumbnail" />
            <Image
              src={`https://images.pexels.com/photos/9957253/pexels-photo-9957253.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_4}`}>
            <input type="radio" name="thumbnail" />
            <Image
              src={`https://images.pexels.com/photos/31199652/pexels-photo-31199652.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_5}`}>
            <input type="radio" name="thumbnail" />
            <Image
              src={`https://images.pexels.com/photos/17209154/pexels-photo-17209154.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
        <li className={styles.carousel_thumbnail}>
          <label className={`${styles.thumbnail_label} ${styles.thumbnail_label_6}`}>
            <input type="radio" name="thumbnail" />
            <Image
              src={`https://images.pexels.com/photos/30462811/pexels-photo-30462811.jpeg`}
              width={1000}
              height={1000}
              alt=""
            />
          </label>
        </li>
      </ul>
    </div>
  )
}