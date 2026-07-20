import styles from "./styles.module.css";
import Image from "next/image";

export const ProductCarousel = ({ images }) => {
  return (
    <div className={styles.product_images}>
      <div className={styles.product_image}>
        {
          images.map(image => (
            <div key={image.id} className={`${styles[image.class]}`}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className={styles.main_image}
              />
            </div>
          ))
        }
      </div>
      <div className={styles.images_list}>
        {
          images.map(image => (
            <label key={image.id} className={styles.image_label}>
              <input
                type="radio"
                name="image"
                className={`${styles[image.class]} ${styles.image_picker}`}
                defaultChecked={image.id === 1 ? true : false}
              />
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className={styles.image_list}
              />
            </label>
          ))
        }
      </div>
    </div>
  )
}