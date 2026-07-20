import Image from "next/image";
import styles from "./card.module.css";
import ipod from "./assets/iPod.webp";
import iphone from "./assets/iphone.jpg";
import imac from "./assets/imac.webp";
import track from "./assets/trackpad.webp";

export const CardAnimation = () => {
  return (
    <div className={styles.container}>

      <div className={`${styles.card}`}>
        <header className={styles.card_header}>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>10 hours</span>
            <span className={styles.header_label}>Batery Life</span>
          </div>
          <div>
            <span className={styles.header_value}>FireWire</span>
            <span className={styles.header_label}>Connection</span>
          </div>
          <div>
            <span className={styles.header_value}>2" LCG</span>
            <span className={styles.header_label}>Display</span>
          </div>
        </header>
        <main className={styles.card_contents}>
          <figure className={styles.card_media}>
            <Image
              src={imac}
              width={350}
              height={250}
              alt=""
            />
            <figcaption>
              iPod Classic
              <span>1st Generation</span>
            </figcaption>
          </figure>

          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid.
          </p>
        </main>
      </div>

      

      <div className={`${styles.card}`}>
        <header className={styles.card_header}>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
        </header>
        <main className={styles.card_contents}>
          <figure className={styles.card_media}>
            <Image
              src={track}
              width={350}
              height={250}
              alt=""
            />
            <figcaption>
              iPod Classic
              <span>1st Generation</span>
            </figcaption>
          </figure>

          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid.
          </p>
        </main>
      </div>

      <div className={`${styles.card}`}>
        <header className={styles.card_header}>
          <div>
            <span className={styles.header_value}>1,000 songs</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>10 hours</span>
            <span className={styles.header_label}>Batery Life</span>
          </div>
          <div>
            <span className={styles.header_value}>FireWire</span>
            <span className={styles.header_label}>Connection</span>
          </div>
          <div>
            <span className={styles.header_value}>2" LCG</span>
            <span className={styles.header_label}>Display</span>
          </div>
        </header>
        <main className={styles.card_contents}>
          <figure className={styles.card_media}>
            <Image
              src={ipod}
              width={150}
              height={250}
              alt=""
            />
            <figcaption>
              iPod Classic
              <span>1st Generation</span>
            </figcaption>
          </figure>

          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid.
          </p>
        </main>
      </div>


      <div className={`${styles.card}`}>
        <header className={styles.card_header}>
          <div>
            <span className={styles.header_value}>1 TB</span>
            <span className={styles.header_label}>Storage</span>
          </div>
          <div>
            <span className={styles.header_value}>24 hours</span>
            <span className={styles.header_label}>Battery Life</span>
          </div>
          <div>
            <span className={styles.header_value}>Wifi, Bluetooth</span>
            <span className={styles.header_label}>Connection</span>
          </div>
          <div>
            <span className={styles.header_value}>In-Depth</span>
            <span className={styles.header_label}>Display</span>
          </div>
        </header>
        <main className={styles.card_contents}>
          <figure className={styles.card_media}>
            <Image
              src={iphone}
              width={400}
              height={250}
              alt=""
            />
            <figcaption>
              iPhone 
              <span>New Generation</span>
            </figcaption>
          </figure>

          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid.
          </p>
        </main>
      </div>
    </div>
  )
}