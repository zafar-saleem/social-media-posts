"use client";

import React from "react";
import styles from "./PaymentProcess.module.css";
import { ViewsContainer } from "./views";
import { Headers } from "./components/Headers";
import { ProcessSteps } from "./components/ProcessSteps";

const DELAY = 5000;

export const PaymentProcess = () => {
  const [title, setTitle] = React.useState("review");

  React.useEffect(() => {
    if (title === "processing") {
      setTimeout(() => {
        setTitle("confirmation");
      }, DELAY);
    }
  }, [title]);

  return (
    <section className={styles.container}>
      <Headers title={title} />
      <ProcessSteps title={title} />
      <ViewsContainer title={title} setTitle={setTitle} />
    </section>
  )
}
