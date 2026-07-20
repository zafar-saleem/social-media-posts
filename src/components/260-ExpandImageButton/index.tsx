import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const ExpandImageButton = () => {
  return (
    <Link href="#" className={styles.button}>
      <Image
        src="https://images.pexels.com/photos/35757464/pexels-photo-35757464.jpeg"
        width="3000"
        height="3000"
        alt=""
      />
      <span className={styles.text}>Explore</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-arrow-right-icon lucide-arrow-right ${styles.icon_one}`}>
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-arrow-right-icon lucide-arrow-right ${styles.icon_two}`}>
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    </Link>
  )
}