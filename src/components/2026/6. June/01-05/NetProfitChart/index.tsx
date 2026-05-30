import Link from "next/link";
import styles from "./styles.module.css";
import React, { CSSProperties } from "react";

const CHART_DATA = {
  id: 1,
  month: "June",
  currency: "$",
  avg: 48000,
  total: 91000,
  trend: {
    percentage_value: 4.1,
    trajectory: "up",
  },
  week: [
    {
      id: 1,
      label:  "Jun 1",
      net_profit: 31000,
    },
    {
      id: 2,
      label:  "Jun 2",
      net_profit: 31000,
    },
    {
      id: 3,
      label:  "Jun 3",
      net_profit: 61000,
    },
    {
      id: 4,
      label:  "Jun 4",
      net_profit: 34000,
    },
    {
      id: 5,
      label:  "Jun 5",
      net_profit: 47000,
    },
    {
      id: 6,
      label:  "Jun 6",
      net_profit: 59000,
    },
    {
      id: 7,
      label:  "Jun 7",
      net_profit: 74000,
    }
  ]
};

const formatPrice = (number: number | bigint) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(number);
}

const removeLeadingZeros = (priceString: string) => {
  return priceString.replace(/000(?=(\.|$))/, '');
}

export const NetProfitChart = () => {
  return (
    <div className={styles.chart}>
      <div className={styles.chart_header}>
        <h1 className={styles.chart_title}>Net Profit</h1>
        <span className={styles.chart_text}>Last 7 days</span>
        <Link href={`#`} className={styles.chart_button}>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="rgb(163 163 163)" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ellipsis-icon lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1"/>
            <circle cx="19" cy="12" r="1"/>
            <circle cx="5" cy="12" r="1"/>
          </svg>
        </Link>
      </div>



      <div className={styles.chart_summary}>
        <span className={styles.chart_total}>{CHART_DATA.currency}{formatPrice(CHART_DATA.total)}</span>
        <div className={styles.chart_pill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(92 184 96)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
          <span className={styles.chart_text}>{CHART_DATA.trend.percentage_value} %</span>
        </div>
      </div>



      <div className={styles.chart_bars} style={{ "--pos": `${removeLeadingZeros(CHART_DATA.avg.toString())}px`} as CSSProperties}>
        <div className={styles.bars_bar}>
        {
          CHART_DATA.week.map(item => (
            <div
              className={styles.chart_bar}
              key={item.id}
              style={{
                "--h": `${Number(removeLeadingZeros(item.net_profit.toString())) * 1.5 as CSSProperties}px`,
              }}
              data-tooltip={`${item.label}: ${CHART_DATA.currency}${formatPrice(item.net_profit)}`}
            />
          ))
        }
        </div>
        <div className={styles.bars_labels}>
          {
            CHART_DATA.week.map(item => (
              <React.Fragment key={item.id}>
                <span className={styles.label}>{item.label}</span>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}
