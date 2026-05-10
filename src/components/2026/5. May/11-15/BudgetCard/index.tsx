import { CSSProperties } from "react";
import styles from "./styles.module.css";

const DATA = {
  cash_spent: "650",
  total: "1,200",
  currency: "$",
  activities: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(233 234 240)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple-icon lucide-apple"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>,
      text: "groceries",
      spent: "300",
      bar_color: "173 174 180",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(19 168 114)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-platter-icon lucide-hand-platter"><path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>,
      text: "dining",
      spent: "250",
      bar_color: "6 135 91",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(109 73 202)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bus-icon lucide-bus"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>,
      text: "transport",
      spent: "120",
      bar_color: "94 62 182",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(231 142 17)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store-icon lucide-store"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>,
      text: "shopping",
      spent: "80",
      bar_color: "176 114 5",
    },
  ],
}

export const BudgetCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <span className={styles.card_title}>Monthly Envelope</span>
        <div className={styles.card_badge}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(225 75 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
          <span className={styles.badge_text}>7 day streak</span>
        </div>
      </div>



      <div className={styles.card_body}>
        <p className={styles.box}>
          <span className={styles.text_large}>{DATA.currency}{DATA.cash_spent}</span> <span className={`${styles.text_secondary} ${styles.text_regular}`}>/ {DATA.currency}{DATA.total}</span>
        </p>




        <div className={styles.card_chart}>
          {
            DATA.activities.map(bar => (
              <div
                className={`${styles[bar.text]} ${styles.bar}`}
                key={bar.bar_color}
                style={{
                  "--bar-color": bar.bar_color,
                  "--width": `${parseInt(bar.spent) / parseInt(DATA.total) * 100}%`,
                } as CSSProperties}
              />
            ))
          }
        </div>



        <div className={styles.card_grid}>
          {
            DATA.activities.map(item => (
              <div className={`${styles[item.text]} ${styles.card_pill}`} key={item.text}>
                {item.icon}
                <span className={styles.text}>{item.text}</span>
                <span className={styles.spent}>{DATA.currency}{item.spent}</span>
              </div>
            ))
          }
        </div>
      </div>


      <div className={styles.card_footer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(253 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-siren-icon lucide-siren"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/></svg>
        <div className={styles.block}>
          <span className={styles.text}>Cap spend</span>
          <span className={`${styles.text_small} ${styles.text_secondary}`}>Warn before exceeding</span>
        </div>
        <label className={styles.toggle}>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  )
}