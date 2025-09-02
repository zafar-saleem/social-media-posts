import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contents}>
        <Link href="#" className={styles.item}>
          <Image
            width={100}
            height={100}
            src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg"
            alt=""
          />
          <span>title</span>
        </Link>
        <Link href="#" className={styles.item}>
          <Image
            width={100}
            height={100}
            src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg"
            alt=""
          />
          <span>title</span>
        </Link>
        <Link href="#" className={styles.item}>
          <Image
            width={100}
            height={100}
            src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg"
            alt=""
          />
          <span>title</span>
        </Link>
        <Link href="#" className={styles.item}>
          <Image
            width={100}
            height={100}
            src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg"
            alt=""
          />
          <span>title</span>
        </Link>
      </div>
    </div>
  )
}