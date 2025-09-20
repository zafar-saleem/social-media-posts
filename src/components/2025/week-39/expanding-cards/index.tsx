import styles from "./expanding.module.css";

export const ExpandingCards = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          backgroundImage: "url(https://images.stockcake.com/public/f/5/8/f58133e7-6f67-45ad-86e6-56f8f5081222_large/elegant-crimson-professional-stockcake.jpg)"
        }}
      />
      <div className={styles.card} style={{ backgroundImage: "url(https://images.stockcake.com/public/2/9/4/29478247-a16a-41dd-aa8a-07d1b2f12609_large/iridescent-ocean-dreamer-stockcake.jpg)" }} />
      <div className={styles.card} style={{ backgroundImage: "url(https://images.stockcake.com/public/1/d/b/1db134ab-1b17-45ee-b5bc-0cf53d7b5aaf_large/ethereal-sakura-dream-stockcake.jpg)" }} />
      <div className={styles.card} style={{ backgroundImage: "url(https://images.stockcake.com/public/1/0/1/101482a9-fe5c-47ec-8545-ebfd92130438_large/digital-blossom-entity-stockcake.jpg)" }} />
      <div className={styles.card} style={{ backgroundImage: "url(https://images.stockcake.com/public/c/b/d/cbd02bc6-322f-403e-a3cc-686c8cf8e120_large/vintage-anime-portrait-stockcake.jpg)" }} />
    </div>
  )
}