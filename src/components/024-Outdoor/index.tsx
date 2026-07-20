import Image from "next/image";
import styles from "./outdoor.module.css";
import trail from "./assets/trail.jpg";
import React from "react";

export const Outdoor = () => {
  const [toggle, setToggle] = React.useState(false);

  console.log(toggle)

  return (
    <div className={styles.card}>
      <figure className={styles.card_media}>
        <Image src={trail} alt="" fill className={styles.card_image} style={{
          objectFit:"cover",
        }} />
        <figcaption className={styles.media_contents}>
          <section className={styles.media_container}>
            <h2 className={styles.card_media_title}>Montanha do Pico</h2>
            <p className={styles.card_media_desc}>Dormant Volcano</p>
          </section>
          <button className={styles.btn_media_route}>Start route</button>
        </figcaption>
      </figure>
      <div className={`${styles.card_contents} ${toggle ? styles.open : styles.close}`}>
        <div className={`${styles.grid}`}>
          <div className={styles.metrics_container}>
            <h1 className={styles.card_title}>
            Montanha do Pico Trail
              <span className={styles.subtitle}>1886 by Helen Rowe & Elias Mendez</span>
            </h1>
            <div className={styles.card_metrics}>
              <section>
                12.4km
                <span className={styles.card_metrics_category}>Distance</span>
              </section>
              <section>
                423m
                <span className={styles.card_metrics_category}>Elevation</span>
              </section>
              <section>
                4h 45m
                <span className={styles.card_metrics_category}>Duration</span>
              </section>
            </div>
          </div>
          <div className={styles.route_map}>
            <div className={styles.route}></div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi ullam quam non aut odio, iste impedit temporibus eos et delectus corporis molestias error id voluptatem explicabo ratione eum fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, similique?</p>
      </div>
      <button
        className={styles.card_button_more}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24taWNvbiBsdWNpZGUtY2hldnJvbi1kb3duIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4="
            width={25}
            height={25}
            alt=""
            className={`${styles.icon} ${toggle ? styles.rotate_up : styles.rotate_down}`}
          />
        </button>
    </div>
  )
}