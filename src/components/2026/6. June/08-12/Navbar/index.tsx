import Link from "next/link";
import styles from "./styles.module.css";

const NAVBAR_ITEMS = [
  {
    id: 1,
    label: "work",
    href: "#",
  },
  {
    id: 2,
    label: "studio",
    href: "#",
  },
  {
    id: 3,
    label: "archive",
    href: "#",
  },
  {
    id: 4,
    label: "contact",
    href: "#",
  },
]

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href={`#`}>
        <svg
          width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="rgb(172 172 172)"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-feather-icon lucide-feather">
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/>
            <path d="M16 8 2 22"/>
            <path d="M17.5 15H9"/>
        </svg>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {
            NAVBAR_ITEMS.map(item => (
              <li className={styles.list_item} key={item.id}>
                <Link href={item.href} className={styles.item_link}>
                  <div className={styles.scroll}>
                    <span className={styles.label_initial} data-label={item.label}>{item.label}</span>
                    <span className={styles.label_hover} data-label={item.label}>{item.label}</span>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}