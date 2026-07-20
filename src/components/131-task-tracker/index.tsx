"use client";

import React from "react";
import styles from "./task.module.css";

type TasksListType = {
  id: number,
  task_name: string,
  status: string,
}

type TTasksList = {
  [x: string]: any;
  id: number,
  task_name: string,
  total_tasks: number,
  completed_tasks: number,
  status: string,
  subtitle: string,
  tasks_list: TasksListType[];
}

type TaskListType = {
  tasksList: TTasksList;
}

const Tasks = [
  {
    id: 1,
    task_name: "Task A",
    total_tasks: 6,
    completed_tasks: 3,
    status: "completed",
    subtitle: "Strcuture Rebuild",
    tasks_list: [
      {
        id: 1,
        task_name: "Information Audit",
        status: "completed",
      },
      {
        id: 2,
        task_name: "User Flow Mapping",
        status: "completed",
      },
      {
        id: 3,
        task_name: "Content Re-Architecture",
        status: "To be done",
      },
      {
        id: 4,
        task_name: "Wireframe Structuring",
        status: "To be done",
      },
      {
        id: 5,
        task_name: "Navigation & Linking Logic",
        status: "In progress",
      },
      {
        id: 6,
        task_name: "Stakeholder Alignment",
        status: "completed",
      },
    ]
  },
  {
    id: 2,
    task_name: "Task B",
    total_tasks: 6,
    completed_tasks: 4,
    status: "completed",
    subtitle: "UI Design",
    tasks_list: [
      {
        id: 1,
        task_name: "Information Audit For Wireframes",
        status: "completed",
      },
      {
        id: 2,
        task_name: "User Flow Mapping",
        status: "completed",
      },
      {
        id: 3,
        task_name: "Build Wireframes",
        status: "completed",
      },
      {
        id: 4,
        task_name: "Design Them",
        status: "completed",
      },
      {
        id: 5,
        task_name: "Demo Design",
        status: "In progress",
      },
      {
        id: 6,
        task_name: "Ship Design",
        status: "In progress",
      },
    ]
  },
  {
    id: 3,
    task_name: "Task C",
    subtitle: "Implementaion",
    total_tasks: 6,
    completed_tasks: 0,
    status: "completed",
    tasks_list: [
      {
        id: 1,
        task_name: "Setup Dev Process",
        status: "To be done",
      },
      {
        id: 2,
        task_name: "Setup Dev Tools",
        status: "To be done",
      },
      {
        id: 3,
        task_name: "Setup Infra",
        status: "To be done",
      },
      {
        id: 4,
        task_name: "Add User Stories to Agile Board",
        status: "To be done",
      },
      {
        id: 5,
        task_name: "Begin Implementing",
        status: "To be done",
      },
      {
        id: 6,
        task_name: "Ship Features",
        status: "To be done",
      },
    ]
  },
];

const TasksList = (id: number) => Tasks.filter((item) => item.id === id)[0];

export const TaskTrackerCard = () => {
  const [tasksList, setTasksList] = React.useState(() => TasksList(1));

  return (
    <div className={styles.task_container}>
      <header className={styles.task_header}>
        <div className={styles.title_wrapper}>
          <div className={styles.header_title}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(53 53 53)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <span className={styles.title_text}>Tasks</span>
          </div>
          <div className={styles.header_controls}>
            <select>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
        <div className={styles.header_progress}>
          
        <Tabs Tasks={Tasks} setTasksList={setTasksList} />

        </div>
      </header>



      <main className={styles.contents}>
        <TaskList tasksList={tasksList} />
      </main>
    </div>
  )
}

const Tabs = ({ Tasks, setTasksList }: any) => {
  return (
    <>
      {
        Tasks.map((item: TTasksList, index: number) => (
          <label className={`${styles.task}`} key={item.id}>
            <span className={styles.label}>{item.task_name}:</span> <div className={styles.progress_bar}>
              {item.tasks_list.map((taskList, i: number) => (
                <React.Fragment key={i}>
                  {i < item?.completed_tasks ? <span key={i} style={{ backgroundColor: "rgb(27 194 93)" }} /> : <span key={i} style={{ backgroundColor: "rgb(227 227 227)" }} />}
                </React.Fragment>
              ))}
            </div>
            <span className={styles.steps}>{item.completed_tasks || 0}/{item.tasks_list.length}</span>
            <input
              type="radio"
              name="tab"
              defaultChecked={index === 0 && true}
              onChange={() => {
                setTasksList(() => TasksList(item.id));
              }}
            />
          </label>
        ))
      }
    </>
  )
}

let delay = 0.1;

const TaskList = ({ id, subtitle, tasksList }: any) => {
  return (
    <div key={id}>
      <span className={styles.task_title}>{subtitle}</span>
      {
        tasksList.tasks_list?.map((task: TasksListType, index: number) => (
          <div className={styles.list} key={task.id} style={{ transitionDelay: `${delay = delay + 0.1}s`}}>
            <div className={styles.list_item}>
              <button className={styles.item_button}>
                <span className={styles.text}>{task.task_name}</span>
                <ProgressIcon type={task.status} />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const MapProgressIcon: any = {
  "completed": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(108 168 138)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
  "In progress": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>,
  "To be done": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>,
}

type ProgressIconType = {
  type: string;
}

const ProgressIcon = ({ type }: ProgressIconType) => {
  return (
    <div className={styles.indicators}>
      {MapProgressIcon[type]}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  )
}