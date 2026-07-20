import Image from "next/image";
import styles from "./styles.module.css";
import Icon from "./assets/running.gif";
import React from "react";
import { data } from "./data";

export const ActivityTracker = () => {
  return (
    <section className={styles.activity_card}>
      <Header />
      <Chart />
      <p className={styles.details}>Activity up 12% from last week</p>
    </section>
  )
}

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.icon}>
        <Image src={Icon} width={35} height={35} alt="" />
      </span>
      <div>
        <h1 className={styles.title}>{data.title}</h1>
        <span className={styles.info}>{data.duration}</span>
      </div>
    </div>
  )
}

export const Chart = () => {
  return (
    <div className={styles.chart}>
      {
        data.week_days.map((bar, index) => (
          <React.Fragment key={index}>
            <Bar bar={bar} />
            <Label label={bar.label} />
            <Tooltip bar={bar} />
          </React.Fragment>
        ))
      }
    </div>
  )
}

type Props = {
  bar: {
    metrics: number;
    day: string;
  }
}

export const Bar = ({ bar }: Props) => {
  return (
    <div
      className={styles.bar}
      style={{
        "--metrics": `${bar.metrics}px`,
        "--anchor-name": bar.day,
      }}
    />
  )
}

type LabelProps = {
  label: string;
}

export const Label = ({ label }: LabelProps) => {
  return (
    <span className={styles.label}>{label}</span>
  )
}

type TooltipProps = {
  bar: {
    day: string;
    metrics: number;

    tooltip: {
      miles: string;
      total_steps: string;
      altitude_gains: string,
    }
  }
}

export const Tooltip = ({ bar }: TooltipProps) => {
  return (
    <div
      className={`${styles.tooltip}_${bar.day} ${styles.tooltip}`}
      style={{
        "--position-anchor": bar.day,
        "--top": `${bar.metrics}px`,
      }}
    >
      <p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-milestone-icon lucide-milestone"><path d="M12 13v8"/><path d="M12 3v3"/><path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"/></svg>
        
        <span>{bar.tooltip.miles} miles</span>
      </p>
      <p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
          <span>{bar.tooltip.total_steps}</span>
      </p>
      <p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrows-up-from-line-icon lucide-arrows-up-from-line"><path d="m4 6 3-3 3 3"/><path d="M7 17V3"/><path d="m14 6 3-3 3 3"/><path d="M17 17V3"/><path d="M4 21h16"/></svg>
        <span>{bar.tooltip.altitude_gains}</span>
      </p>
    </div>
  )
}