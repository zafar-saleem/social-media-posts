import Image from "next/image";
import styles from "./styles.module.css";

export const ConnectWallet = () => {
  return (
    <div className={styles.connect_wallet}>
      <label className={styles.theme}>
        <input type="checkbox" className={styles.theme_input} />
      </label>
      <h1 className={styles.wallet_title}>Connect your wallet</h1>
      <div className={styles.wallet_tabs}>
        <label className={styles.tabs_label}>
          <input type="radio" className={styles.label_input} name="tab" defaultChecked />
          <span className={styles.label_text}>Add manually</span>
        </label>
        <label className={styles.tabs_label}>
          <input type="radio" className={styles.label_input} name="tab" />
          <span className={styles.label_text}>Import</span>
        </label>
      </div>


      <article className={styles.wallet_content}>
        <Image width="94" height="94" loading="lazy" src="https://img.icons8.com/3d-fluency/94/wallet.png" alt="wallet"/>
        <p className={styles.content_copy}>
          Connect your wallet to see your verified hackathon projects and import them to your profile.
        </p>
      </article>

      <button className={styles.wallet_button}>Connect wallet</button>
    </div>
  )
}