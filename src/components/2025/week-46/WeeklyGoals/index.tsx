"use client";

import React from "react";
import styles from "./styles.module.css";
import { initialTasks } from "./data";
import { GoalsTracker } from "./components/GoalsTracker";
import { GoalsList } from "./components/GoalsList";

export const WeeklyGoals = () => {
  const [tasks, setTasks] = React.useState(initialTasks);
  const [meeting, setMeetings] = React.useState(4);

  return (
    <section className={styles.container}>
      <GoalsTracker tasks={tasks} meeting={meeting} />
      <GoalsList
        setMeetings={setMeetings}
        meeting={meeting}
        tasks={tasks}
        setTasks={setTasks}
      />
    </section>
  )
}
