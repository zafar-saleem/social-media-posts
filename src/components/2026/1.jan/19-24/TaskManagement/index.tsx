import Link from "next/link";
import styles from "./styles.module.css";

export const Data = [
  {
    title: "Designing new landing page",
    desc: "Create modern, responsive design",
    priority: "high",
    tags: [
      "Design",
      "UI/UX"
    ],
    timestamp: "Sep 16, 2025",
    comments: 3,
    attachments: 2,
    author: "SC",
    color: "rgb(237 57 81)",
  },
  {
    title: "Update documentation",
    desc: "Revise API docs with new endpoints",
    priority: "medium",
    tags: [
      "Docs",
    ],
    timestamp: "Sep 12, 2025",
    comments: 1,
    attachments: 1,
    author: "MJ",
    color: "rgb(52 118 243)",
  },
  {
    title: "Research competitor analysis",
    desc: "Analyze top 5 competitors and their pricing strategy",
    priority: "low",
    tags: [
      "Research",
      "Strategy",
    ],
    timestamp: "Sep 11, 2025",
    comments: 2,
    attachments: 3,
    author: "JT",
    color: "rgb(242 149 14)",
  },
]

export const TaskManagement = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Task Progress</h1>
        <p className={styles.desc}>
          Take a quick look at your recent tasks.
        </p>
        <button className={styles.button_more}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(153 154 160)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
      <div className={styles.section}>
        <span className={styles.section_title}>To Do</span>
        <span className={styles.section_counter}>{Data.length}</span>
        <Link className={styles.section_link} href="#">See more</Link>
      </div>
      <div className={styles.cards_list}>
        {
          Data.map((item, index) => (
            <section key={index} className={styles.card}>
              <header className={styles.card_header}>
                <span className={styles.card_title}>{item.title}</span>
                <button className={styles.card_more}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(118 122 129)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                </button>
              </header>
              <main className={styles.card_main}>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.card_tags}>
                  <span className={`${styles.card_pill} ${styles[item.priority]}`}>{item.priority}</span>
                  {
                    item.tags.map((tag, index) => (
                      <span key={index} className={`${styles.card_pill}`}>{tag}</span>
                    ))
                  }
                </div>
              </main>
              <footer className={styles.card_footer}>
                <span className={styles.card_timestamp}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(192 193 201)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  <span className={styles.text}>{item.timestamp}</span>
                </span>
                <Link href="#" className={styles.card_comments}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(192 193 201)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-text-icon lucide-message-square-text"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/></svg>
                  <span>{item.comments}</span>
                </Link>
                <Link href="#" className={styles.card_attachment}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(192 193 201)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                  <span className={styles.text}>{item.attachments}</span>
                </Link>
                <Link href="#" className={styles.author} style={{ "--color": item.color }}>{item.author}</Link>
              </footer>
            </section>
          ))
        }
      </div>
    </section>
  )
}
