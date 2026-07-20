"use client";

import React from "react";
import styles from "../../SignUp.module.css";
import { positions } from "../../utils";
import { ScreenInfo } from "./screens/Info";
import { ScreenContact } from "./screens/Contact";
import { ScreenSecurity } from "./screens/Security";
import { ScreenReview } from "./screens/Review";
import { ScreenListProps } from "./screens/types";

export const ScreensList = ({ step, setStep }: ScreenListProps) => {
  const [form, setForm] = React.useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  console.log(step);

  return (
    <section
      className={styles.steps_contents}
      style={{ "--pos-x": positions[step.label].slider }}
    >  
      <ScreenInfo setStep={setStep} step={step} setForm={setForm} form={form} />
      <ScreenContact setStep={setStep} step={step} setForm={setForm} form={form} />
      <ScreenSecurity setStep={setStep} step={step} setForm={setForm} form={form} />
      <ScreenReview {...form} />
    </section>
  )
}
