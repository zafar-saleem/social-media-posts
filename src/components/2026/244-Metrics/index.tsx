import Link from "next/link";
import styles from "./styles.module.css";

export const Metrics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Embedding v3</h1>
        <div className={styles.chip}>
          <span />
          <span className={styles.text}>Warning</span>
        </div>
        <span className={styles.subtitle}>AI model</span>
      </div>




      <div className={styles.tabs}>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" defaultChecked />
          <span className={styles.label_text}>Overview</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" />
          <span className={styles.label_text}>Traces</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" />
          <span className={styles.label_text}>Connections</span>
        </label>
      </div>




      <div className={styles.block}>
        <span className={styles.title}>Key Metrics</span>
        <div className={styles.group}>
          <div className={styles.metrics_block}>
            <span className={styles.metrics_title}>Latency</span>
            <span className={styles.metrics_value}>245m</span>
            <div className={styles.metrics_trend}>
              <div className={styles.trend_up}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(69 122 99)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
              </div>
              <span className={styles.value}>892ms</span>
            </div>
          </div>
          
          
          <div className={styles.metrics_block}>
            <span className={styles.metrics_title}>Throughput</span>
            <span className={styles.metrics_value}>12.4k/h</span>
            <div className={styles.metrics_trend}>
              <div className={styles.trend_down}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(69 122 99)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
              </div>
              <span className={styles.value}>18.9k/h</span>
            </div>
          </div>
          
          
          
          <div className={styles.metrics_block}>
            <span className={styles.metrics_title}>Error rate</span>
            <span className={styles.metrics_value}>0.12%</span>
            <div className={styles.metrics_trend}>
              <div className={styles.trend_up}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(69 122 99)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
              </div>
              <span className={styles.value}>0.36%</span>
            </div>
          </div>
          
          
          
          
          <div className={styles.metrics_block}>
            <span className={styles.metrics_title}>Tokens</span>
            <span className={styles.metrics_value}>2.5M</span>
            <div className={styles.metrics_trend}>
              <div className={styles.trend_up}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(69 122 99)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
              </div>
              <span className={styles.value}>2.1M</span>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.block}>
          <span className={styles.title}>Quick Actions</span>
          <div className={styles.group}>
            <ul>
              <li>
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  <span>View metrics dashboard</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  <span>Show historical data</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer-icon lucide-timer"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>
                  <span>Configure alerts</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  <span>Open in provider console</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}