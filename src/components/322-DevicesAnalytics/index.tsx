import { CSSProperties } from "react";
import styles from "./styles.module.css";

const CHART = [
  {
    id: 1,
    device_type: "Desktop",
    percentage: 56.17,
    value: 1900,
  },
  {
    id: 2,
    device_type: "Mobile",
    percentage: 33.78,
    value: 1200,
  },
  {
    id: 3,
    device_type: "Laptop",
    percentage: 5.49,
    value: 190,
  },
  {
    id: 4,
    device_type: "Tablet",
    percentage: 4.83,
    value: 167,
  },
]

const ANALYTICS = {
  ...CHART,
  children: CHART,
}

export const DevicesAnalytics = () => {
  return (
    <div className={styles.devices_analytics}>
      <label className={styles.toggle_theme}>
        <input type="checkbox" className={styles.theme_input} />
      </label>


      <Header />
      
      <div className={styles.analytics_chart}>
        <div
          className={styles.chart_pie}
          style={{
            "--desktop-percentage": `${ANALYTICS.children[0].percentage}%`,
            "--mobile-percentage": `${ANALYTICS.children[1].percentage}%`,
            "--laptop-percentage": `${ANALYTICS.children[2].percentage}%`,
            "--tablet-percentage": `${ANALYTICS.children[3].percentage}%`,
          } as CSSProperties}
        >
          <span className={styles.pie_label}>Visitors</span>
          <h1 className={styles.total}>{ANALYTICS.children.reduce((acc, item) => acc + item.value, 0)}</h1>
          <span className={styles.pie_trend}>UP</span>
        </div>
        <ul className={styles.chart_data}>
          {
            ANALYTICS.children.map(item => (
              <li className={`${styles.charts_text}`} key={item.id}>
                <div className={`${styles.color} ${styles[item.device_type.toLowerCase()]}`} />
                <div className={styles.chart_text}>
                  <span className={styles.text}>{item.device_type}</span>
                  <div className={styles.values}>
                    <span className={styles.value}>{item.percentage}%</span>
                    <span className={styles.value}>
                      {
                        Intl.NumberFormat("en-US", { notation: "compact" }).format(item.value)
                      }
                    </span>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const Header = () => (
  <div className={styles.analytics_header}>
    <div className={styles.header_group}>
      <div className={styles.header_box}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(102 108 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>
        <span className={styles.header_title}>Devices</span>
      </div>
      <div className={styles.header_actions}>
      <button className={`${styles.button} ${styles.actions_download}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(102 108 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
      </button>
      <button className={`${styles.button} ${styles.actions_download}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(102 108 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
      </button>
      <button className={`${styles.button} ${styles.actions_more}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(102 108 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>
      
    </div>


    <p className={styles.header_text}>Users visiting the website with this device category.</p>
  </div>
)