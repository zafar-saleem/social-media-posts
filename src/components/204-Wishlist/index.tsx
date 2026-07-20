import styles from "./styles.module.css";
import { data } from "./data";
import Image from "next/image";

export const Wishlist = () => {
  return (
    <section className={styles.wishlist}>
      <h1 className={styles.wishlist_title}>My Wishlist</h1>
      <div className={styles.wrapper}>
        {
          data.map(item => (
            <div key={item.id} className={styles.card}>
              <figure className={styles.card_media}>
                <Image
                  src={item.media.src}
                  width={item.media.width}
                  height={item.media.height}
                  alt={item.media.alt}
                />
              </figure>


              <div className={styles.price_container}>
                <span className={styles.card_price}>{item.price}</span>
              </div>



              <div className={styles.amenities}>
                {
                  item.amenities.map((amenity, index) => (
                    <div key={index} className={styles.amenity}>
                      {amenity.icon}
                      <div className={styles.info}>
                        <span className={styles.label}>{amenity.text}</span>
                        <span className={styles.value}>{amenity.value}</span>
                      </div>
                    </div>
                  ))
                }
              </div>


              <div className={styles.address_container}>
                <span className={styles.title}>{item.title}</span>
                <p className={styles.address}>{item.address}</p>
              </div>




              <button className={styles.button_like}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(244 88 24)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              </button>
            </div>
          ))
        }
      </div>
    </section>
  )
}