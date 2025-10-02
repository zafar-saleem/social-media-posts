"use client";

import React from "react";
import styles from "./tracker.module.css";
import Link from "next/link";
import { TrackingData } from "./TrackingData";
import { Tasks } from "./TasksData";

export const WeeklyFitnessTracker = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className={styles.container}>
      <Tabs week={TrackingData.week} setSelectedTab={setSelectedTab} />
      <SubTasks selectedTab={selectedTab} />
    </div>
  )
}

const filterSubTasks = (id: number) => Tasks.filter(item => id === item.day_id);

const SubTasks = ({ ...props }) => {
  return (
    <>
      <MetaInfo subTasks={filterSubTasks(props.selectedTab || 4)[0]} />
      <ul className={styles.tasks_container}>
        {
          filterSubTasks(props.selectedTab || 4).map((item, index) => (
            <React.Fragment key={index}>
              {
                item.sub_tasks.map((subTask, i) => (
                  <li key={i} className={styles.task_item}>
                    <AccomplishmentIndicator subTask={subTask} />
                    <Link href="#">
                      <div className={styles.task}>
                        <div>
                          <span className={styles.task_icon}>{subTask.icon}</span>
                          <span className={styles.task_text}>{subTask.text}</span>
                        </div>
                        <span className={styles.task_desc}>{subTask.desc}</span>
                      </div>
                      <span className={styles.icon_arrow}>
                        <svg 
                          width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="rgb(195 195 195)"
                          strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-right-icon lucide-chevron-right"
                        >
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))
              }
            </React.Fragment>
          ))
        }
      </ul>
    </>
  )
}

type TSubTask = {
  icon: any,
  text: string,
  desc: string,
  state: string,
  border_color: string;
  accomplished_color: string;
}

type TSubTasksProps = {
  subTask: TSubTask,
}

const AccomplishmentIndicator = ({ subTask }: TSubTasksProps) => {
  return (
    <div
      className={styles.accomplish}
      style={{ 
        "--accomplished-color": subTask.accomplished_color,
        "--accomplished-border-color": subTask.border_color,
      }}
    >
      <svg
        width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="rgb(253 253 255)"
        strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check-icon lucide-check"
      >
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    </div>
  )
}

type TSubTasks = {
  day_id: number,
  id: number,
  pending_tasks: number,
  progress: string,
  progress_color?: string;
  color?: string;
  progress_bar_color: string;
}

type TSubTaskProps = {
  subTasks: TSubTasks,
}

const TextStrategy: any = {
  0: "All Tasks Accomplished",
  1: `1 task pending`,
  2: `2 tasks pending`,
  3: `All Tasks pending`,
}

const MetaInfo = ({ subTasks}: TSubTaskProps) => {
  return (
    <div className={styles.meta_info}>
      <section className={styles.title_container}>
        <span className={styles.title}>My Focus</span>
        <span className={styles.sub_info}>{TextStrategy[subTasks?.pending_tasks]}</span>
      </section>
      <span
        className={styles.icon}
        style={{
          "--progress-color": subTasks?.progress_color,
          "--progress": subTasks?.progress,
          "--progress-bar-color": subTasks?.progress_bar_color,
        }}
      >
        <svg
          width="48" height="48" viewBox="0 0 24 24"
          fill={`${subTasks?.color}`}
          stroke="rgb(255 255 255)" strokeWidth="0" strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-flame-icon lucide-flame"
        >
          <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
        </svg>
      </span>
    </div>
  )
}

type TItem = {
  day_name: string,
  day: number,
  state: string,
  progress: string,
  id: number,
  icon?: any;
  progress_color?: string;
  progress_bar_color?: string;
  text_color?: string;
}

const Tabs = ({ ...props }) => {
  return (
    <div className={styles.weekly_tabs}>
      {
        props.week.map((item: TItem, index: number) => (
          <label
            className={styles.tab_label}
            key={index}
            style={{
              "--progress": item.progress,
              "--target-progress-color": item.progress_color,
              "--bar-color": item?.progress_bar_color,
              "--color": item.text_color,
            }}
          >
            <input
              type="radio"
              name="tab"
              disabled={item.state === "future" ? true : false}
              defaultChecked={item.state === "current" && true}
              onChange={() => props.setSelectedTab(item.id)}
            />
            <span className={styles.day_name}>{item.day_name}</span>
            <span className={styles.day_number}>{item.day}</span>
            {item?.icon}
          </label>
        ))
      }
    </div>
  )
}