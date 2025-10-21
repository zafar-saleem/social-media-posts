"use client";

import React from "react";
import styles from "./SignUp.module.css";
import { Header } from "./components/Header";
import { Stepper } from "./components/Stepper";
import { ProgressBar } from "./components/ProgressBar";
import { ScreensList } from "./components/ScreensList";


export const SignUp = () => {
  const [step, setStep] = React.useState({
    status: "checked",
    label: "info",
  });

  return (
    <form className={styles.form_signup}>
      <Header />
      <main className={styles.contents}>
        <Stepper {...step} />
        <ProgressBar {...step} />
        <ScreensList step={step} setStep={setStep} />
      </main>
    </form>
  )
}


