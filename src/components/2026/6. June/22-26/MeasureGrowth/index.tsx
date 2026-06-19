"use client";

import styles from "./styles.module.css";
import { GROWTH_DATA } from "./data";
import { CSSProperties } from "react";
import { ChildCardType, ProgressType } from "./types";

export const MeasureGrowth = () => {
  return (
    <div className={styles.growth_card}>
      <h1 className={styles.growth_title}>{GROWTH_DATA.title}</h1>
      <p className={styles.growth_text}>{GROWTH_DATA.supporting_text}</p>
      <TotalProgress {...GROWTH_DATA.total_progress} />
      <div className={styles.growth_childrens}>
        <ChildCard {...GROWTH_DATA.steps} />
        <ChildCard {...GROWTH_DATA.calories} />
      </div>
    </div>
  )
}

const TotalProgress = ({ ...props }: ProgressType) => {
  return (
    <div className={styles.growth_group}>
      <h2 className={styles.group_label}>{props.label}</h2>
      <span className={styles.group_value}>{props.completed.value}%</span>
      <p className={styles.group_text}>{props.supporting_text}</p>
      <div
        className={styles.group_bar}
        style={{
          "--progress-bar": `${props.completed.value}%`
        } as CSSProperties}
      />
      <div className={styles.group_meta}>
        <div className={styles.group_completed}>
          <span className={styles.value}>{props.completed.value}%</span>
          <span className={styles.label}>{props.completed.label}</span>
        </div>
        <div className={styles.group_average}>
          <span className={styles.value}>{props.average.value}%</span>
          <span className={styles.label}>{props.average.label}</span>
        </div>
      </div>
    </div>
  )
}

const ChildCard = ({ ...props }: ChildCardType) => {
  return (
    <div className={styles.child_card}>
      <h3 className={styles.card_title}>
        {props.icon}        
        <span className={styles.title_label}>{props.label}</span>
      </h3>
      <div
        className={styles.child_bar}
        style={{ "--child-progress": props.completed } as CSSProperties}
      />
      <p className={styles.child_streak}>
        <span className={styles.streak_value}>{props.streak}</span>
        <span className={styles.streak_total}>of {props.total}</span>
      </p>
      <span className={styles.child_completed}>{props.completed}</span>
      <div className={styles.average}>
        <span className={styles.child_average}>avg {props.average}</span>
        <span className={styles.child_prev}>last 7 days</span>
      </div>
      <div className={styles.child_chart}>
        {
          props.children.map(item => (
            <div
              className={styles.chart_bar}
              style={{ "--bar-height": `${Math.round(item.consumed / item.total * 100)}%`, }}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}