"use client";

import styles from "../../styles.module.css";

export type TTask = {
  id: number,
  text: string,
  done: boolean,
  hours: number,
}

const getTotalCompletedTasks = (tasks: TTask[]) => 
  tasks.filter(item => item.done).length;

const getTotalWorkingHours = (tasks: TTask[]) => 
  tasks.reduce((prev, item) => prev + item.hours, 0);

const getCompletedTasksHours = (tasks: TTask[]) => 
  tasks.reduce((combinator, item) => item.done ? combinator + item.hours : combinator, 0);

const getProgress = (tasks: TTask[]) => 
  `${getTotalCompletedTasks(tasks) / tasks.length * 100}%`;

const getCompletedFocusHours = (tasks: TTask[]) => {
  if (getTotalCompletedTasks(tasks) * Math.ceil(getTotalWorkingHours(tasks) / tasks.length) > 100)
    return "100";

  return getTotalCompletedTasks(tasks) * Math.ceil(getTotalWorkingHours(tasks) / tasks.length);
};

const getProgressInPercentage = (completedTasks: number, tasks: TTask[]) => `${Math.floor(completedTasks / tasks.length * 100)}%`;

type Props = {
  tasks: TTask[];
  meeting: number;
}

export const GoalsTracker = ({ tasks, meeting }: Props) => {
  
  return (
    <div className={styles.goals}>
      <header className={styles.goals_header}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1 167 66)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
        <span className={styles.header_label}>Weekly Goals</span>
      </header>
      <section className={styles.goals_contents}>
        <div className={`${styles.tasks} ${styles.weekly_goal}`}>
          <span className={styles.label_text}>Weekly Tasks</span>
          <span className={styles.label_trackers}>{getTotalCompletedTasks(tasks)} / {tasks.length}</span>
          <span
            className={styles.label_progress}
            style={{
              "--tasks-progress": `${getProgress(tasks)}`,
              "--progress-color": `${getTotalCompletedTasks(tasks) < 4 ? "red" : "rgb(0 167 57)"}`
            }}
          />
          <ProgressInPercent tasks={tasks} />
        </div>
        
        
        <div className={`${styles.focus} ${styles.weekly_goal}`}>
          <span className={styles.label_text}>Focus Hours</span>
          <span className={styles.label_trackers}>{getCompletedFocusHours(tasks)} / {getTotalWorkingHours(tasks)}</span>
          <span
            className={styles.label_progress}
            style={{
              "--focus-progress": `${getCompletedTasksHours(tasks) / getTotalWorkingHours(tasks) * getTotalWorkingHours(tasks)}%`,
              "--progress-color": `${getTotalCompletedTasks(tasks) < 4 ? "red" : "rgb(0 167 57)"}`
            }}
          />
          <ProgressInPercent tasks={tasks} />
        </div>
        
        <div className={`${styles.meetings} ${styles.weekly_goal}`}>
          <span className={styles.label_text}>Team Meetings</span>
          <span className={styles.label_trackers}>{meeting} / 10</span>
          <span
            className={styles.label_progress}
            style={{
              "--meeting-progress": `${meeting / 10 * 100}%`,
              "--progress-color": `${meeting < 4 ? "red" : "rgb(0 167 57)"}`
            }}
          />
          <div className={styles.goals_completion}>
            <CompletionIcon completedTasks={meeting} />
            <span className={styles.completion_label}>{meeting / 10 * 100}% complete</span>
          </div>
        </div>
        <div className={styles.user}>
          Track and update your own weekly goals.
        </div>
      </section>
      
    </div>
  )
}

type CompletionIconProps = {
  completedTasks: number;
}

const CompletionIcon = ({ completedTasks }: CompletionIconProps) => {
  if ( completedTasks < 4) {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down-icon lucide-trending-down"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>
  }
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(1 167 66)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
}

type ProgressInPercentProps = {
  tasks: TTask[];
}

const ProgressInPercent = ({ tasks }: ProgressInPercentProps) => {
  let completedTasks = getTotalCompletedTasks(tasks);

  return (
    <div className={styles.goals_completion}>
      <CompletionIcon completedTasks={completedTasks} />
      <span className={styles.completion_label}>
        {getProgressInPercentage(completedTasks, tasks)} complete
      </span>
    </div>
  )
}