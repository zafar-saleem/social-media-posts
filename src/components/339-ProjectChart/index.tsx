import { CSSProperties } from "react";
import styles from "./styles.module.css";

const CATREGORIES = [
  {
    id: 1,
    label: "To Do",
    total: 2,
    color: "rgba(83, 83, 83, 1)",
  },
  {
    id: 2,
    label: "In Progress",
    total: 4,
    color: "rgba(247, 96, 7, 1)",
  },
  {
    id: 3,
    label: "Under Review",
    total: 2,
    color: "rgba(219, 101, 246, 1)",
  },
  {
    id: 4,
    label: "Completed",
    total: 15,
    color: "rgba(43, 198, 43, 1)",
  },
];

const CHART_DATA = {
  title: "Projects Overview",
  total_projects: CATREGORIES.reduce((acc, item) => item.total + acc, 0),
  new_projects: 3,
  children: CATREGORIES
};

export const ProjectChart = () => {
  return (
    <div className={styles.project}>
      <h1 className={styles.project_title}>{CHART_DATA.title}</h1>
      <div className={styles.project_total}>
        <span className={styles.total}>{CHART_DATA.total_projects}</span>
        <p className={styles.group}>
          <span className={styles.total_label}>Total Projects</span>
          <span className={styles.total_value}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            +{CHART_DATA.new_projects} new
          </span>
        </p>
      </div>
      <div
        className={styles.project_chart}
        style={{
          "--total": CHART_DATA.children.length,
          "--todo": `${2 / CHART_DATA.total_projects * 100}%`,
          "--in-progress": `${4 / CHART_DATA.total_projects * 100}%`,
          "--under-review": `${2 / CHART_DATA.total_projects * 100}%`,
          "--completed": `${15 / CHART_DATA.total_projects * 100}%`,
        } as CSSProperties}
      />
      <ul className={styles.project_categories}>
        {
          CHART_DATA.children.map(item => (
            <li className={styles.categories_item} key={item.id}>
              <span className={styles.item_indication} style={{ "--indication": item.color } as CSSProperties} />
              <span className={styles.item_label}>{item.label}</span>
              <span className={styles.item_value}>{item.total}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
