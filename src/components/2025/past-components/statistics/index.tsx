"use client";

import React from "react";
import styles from "./statistics.module.css";

export const Statistics = () => {
  const [active, setActive] = React.useState<string | undefined>("");

  return (
    <div className={styles.container}>
      <div className={`${styles.statistics_bar} ${active && styles.bar_active}`}>
        <button
          onMouseEnter={() => setActive("finance")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("services")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("energy")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("technology")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("consumer")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("capital")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("healthcare")}
          onMouseLeave={() => setActive("")}
        />
        <button
          onMouseEnter={() => setActive("others")}
          onMouseLeave={() => setActive("")}
        />
      </div>

      <div className={styles.statistics}>
        <div data-label="finance" className={`${active === "finance" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_finance}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Finance</span>
            <span className={styles.stat_figures}>31.9%</span>
          </div>
        </div>

        <div data-label="consumer" className={`${active === "consumer" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_consumer}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Consumer Staples</span>
            <span className={styles.stat_figures}>8.5%</span>
          </div>
        </div>

        <div data-label="services" className={`${active === "services" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_services}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Services</span>
            <span className={styles.stat_figures}>11.1%</span>
          </div>
        </div>

        <div data-label="capital" className={`${active === "capital" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_capital}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Capital Goods</span>
            <span className={styles.stat_figures}>5.9%</span>
          </div>
        </div>

        <div data-label="energy" className={`${active === "energy" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_energy}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Energy</span>
            <span className={styles.stat_figures}>10.6%</span>
          </div>
        </div>

        <div data-label="healthcare" className={`${active === "healthcare" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_healthcare}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Healthcare</span>
            <span className={styles.stat_figures}>5.0%</span>
          </div>
        </div>


        <div data-label="technology" className={`${active === "technology" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_technology}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Technology</span>
            <span className={styles.stat_figures}>9.6%</span>
          </div>
        </div>


        <div data-label="others" className={`${active === "others" ? styles.active : styles.inactive}`}>
          <span className={`${styles.indicator} ${styles.stat_indicator_others}`} />
          <div className={styles.stats_container}>
            <span className={styles.stat_label}>Others</span>
            <span className={styles.stat_figures}>17.3%</span>
          </div>
        </div>
      </div>
    </div>
  )
}