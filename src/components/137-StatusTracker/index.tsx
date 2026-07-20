import Link from "next/link";
import styles from "./status.module.css";
import Image from "next/image";

const Users = {
  absent: [
    {
      avatar: "https://images.stockcake.com/public/7/6/2/7623a75e-6252-4230-a9d1-a3599cde19b5_large/elemental-pixel-avatar-stockcake.jpg",
      name: "James",
      c_name: "replaced by Arthur",
      status: {
        label: "Absent",
        icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgb(89 95 107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-octagon-minus-icon lucide-octagon-minus"><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="M8 12h8"/></svg>,
      },
      icon: "",
    }
  ],
  away: [
    {
      avatar: "https://images.stockcake.com/public/b/5/8/b58108b0-c81f-49d0-8dda-46882039c885_large/digital-human-convergence-stockcake.jpg",
      name: "Sofia",
      c_name: "Synerjy",
      status: {
        label: "25m",
        icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgb(129 51 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>,
      },
      icon: "",
    },
    {
      avatar: "https://images.stockcake.com/public/3/c/9/3c90f253-ff30-46fa-84ef-13900effd3eb_large/adorable-anime-mascot-stockcake.jpg",
      name: "Arthur",
      c_name: "Apeks",
      status: {
        label: "15m",
        icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgb(129 51 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>,
      },
      icon: "",
    },
    {
      avatar: "https://images.stockcake.com/public/f/4/4/f446e43f-2db3-43ad-b6fb-8a5f9adfad8e_large/colorful-geometric-mascot-stockcake.jpg",
      name: "Emma",
      c_name: "Pulsie",
      status: {
        label: "42m",
        icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgb(129 51 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>,
      },
      icon: "",
    },
  ]
}

export const StatusTracker = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(85 86 88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>
        <h3 className={styles.title}>Status Tracker</h3>
        <Link href="#" className={styles.button_see_all}>See All</Link>
      </header>
      <TrackingUsersList {...Users} itemKey="absent" title="Absent" />
      <TrackingUsersList {...Users} itemKey="away" title="Away" />
    </div>
  )
}

const SectionTitle = ({ children }: React.PropsWithChildren) => (
  <span className={`${styles.section_title} ${styles.secondary_text}`}>{children}</span>
)

const TrackingUsersList = ({ itemKey, title, ...props }) => {
  return (
    <section className={`${styles[`${itemKey}_container`]} ${styles.flex} ${styles.flex_col} ${styles.gap_1}`}>
      <SectionTitle>{title}</SectionTitle>
      <ul className={`${styles[itemKey]} ${styles.flex} ${styles.flex_col} ${styles.gap_1}`}>
        {
          props[itemKey].map((item, index) => (
            <li key={`${item.name}-${index}`} className={`${styles.item} ${styles.flex} ${styles.gap_half}`}>
              <Image
                className={styles.avatar}
                width={25}
                height={25}
                alt=""
                src={item.avatar}
              />
              <div className={`${styles.user_details} ${styles.flex} ${styles.flex_col}`}>
                <span className={`${styles.user_name} ${styles.primary_text} ${styles.size_200}`}>{item.name}</span>
                <span className={`${styles.more_info} ${styles.secondary_text} ${styles.size_300}`}>{item.c_name}</span>
              </div>
              <span className={`${styles.badge} ${styles[`${itemKey}_badge`]} ${styles.flex} ${styles.gap_quarter}`}>
                {item.status.icon}
                <span className={`${styles.text} ${styles.size_400}`}>{item.status.label}</span>
              </span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}