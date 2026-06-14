import Link from "next/link";
import styles from "./styles.module.css";

const DATA = [
  {
    id: 1,
    title: "Orders import failed",
    time_ago: "42s",
    error: "TimeoutError at step 2",
  },
  {
    id: 2,
    title: "SLA Breach",
    time_ago: "2m 11s",
    error: "Data enrichment",
  },
  {
    id: 3,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 4,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 5,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 6,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 7,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 8,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
  {
    id: 9,
    title: "Product sync auto-fixed",
    time_ago: "5m",
    error: "404 on GET /products",
  },
]

export const Notifications = () => {
  return (
    <div className={styles.notifications}>
        {
          DATA.slice(0, 3).map(item => (
            <Link href="#" key={item.id} className={styles.notifications_list}>
              <span className={styles.list_title}>{item.title}</span>
              <p className={styles.list_copy}>
                <span className={styles.list_timeout}>{item.time_ago}</span>
                <span className={styles.list_text}>{item.error}</span>
              </p>
            </Link>
          ))
        }
        <Link href="#" className={styles.notifications_link}>
          <Badge total={DATA.length} />
          <div className={styles.link_slider}>
            <div className={styles.link_notification}>
              <span className={styles.link_label}>Notifications</span>
            </div>
            <div className={styles.link}>
              <span className={styles.link_label}>View all</span>
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(175 175 175)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </span>
            </div>
          </div>
        </Link>
    </div>
  )
}

const Badge = ({ total }) => {
  if (total > 9) {
    return (
      <>
        <div className={styles.link_badge}>10+</div>
      </>
    )
  }
  return (
    <span className={styles.link_badge}>{total}</span>
  )
}