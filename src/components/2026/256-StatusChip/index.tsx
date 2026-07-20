import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const StatusChip = () => {
  return (
    <>
      <label className={styles.btn_chip}>
        <input type="checkbox" className={styles.input} />
        <div className={styles.media}>
          <Image
            src="https://images.pexels.com/photos/36468979/pexels-photo-36468979.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.media}>
          <Image
            src="https://images.pexels.com/photos/36026444/pexels-photo-36026444.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.media}>
          <Image
            src="https://images.pexels.com/photos/374059/pexels-photo-374059.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </label>
      <div className={styles.dropdown}>
        <Link href="#">
          <Image
            src="https://images.pexels.com/photos/36468979/pexels-photo-36468979.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
          <span className={styles.text}>Futuristic</span>
          <span>Time: 2m 30s</span>
        </Link>
        <Link href="#">
          <Image
            src="https://images.pexels.com/photos/36026444/pexels-photo-36026444.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
          <span className={styles.text}>Nature</span>
          <span>Hang in...</span>
        </Link>
        <Link href="#">
          <Image
            src="https://images.pexels.com/photos/374059/pexels-photo-374059.jpeg"
            width={3000}
            height={3000}
            alt=""
            className={styles.image}
          />
          <span className={styles.text}>City</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(2 199 80)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Click to watch</span>
          </div>
        </Link>
      </div>
    </>
  )
}