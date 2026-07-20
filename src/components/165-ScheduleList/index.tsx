"use client";

import React from "react";
import styles from "./styles.module.css";
import { Header } from "./components/Header";
import { Timeline } from "./components/Timeline";
import { Calendar } from "./components/Calendar";

export const ScheduleList = () => {
  const [minute, setMinute] = React.useState<number>(new Date().getMinutes());
  const [hour] = React.useState<number>(new Date().getHours());

  React.useEffect(() => {
    const time = setInterval(() => {
      setMinute(() => {
        const currentMin = new Date().getMinutes();

        if (currentMin >= 59) return 61;
        return currentMin;
      });
    }, 60000);
    // const time = setInterval(() => setMinute(() => new Date().getMinutes()), 60000);

    () => clearInterval(time);
  }, []);

  return (
    <section className={styles.wrapper}>
      <Header />
      <Timeline hour={hour} minute={minute} />
      <Calendar />
    </section>
  )
}
