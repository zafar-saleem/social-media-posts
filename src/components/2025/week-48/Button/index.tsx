import React from "react";
import styles from "./styles.module.css";

export const Icon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(255 255 255)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-building2-icon lucide-building-2"
    >
      <path d="M10 12h4"/>
      <path d="M10 8h4"/>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"/>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
    </svg>
  )
}

type LabelProps = {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <span className={styles.label}>{text}</span>
  )
}

type Props = {
  Icon: any;
  Label: React.HTMLProps<HTMLSpanElement>;
}

export const Button = ({ Icon, Label }: Partial<Props>) => {
  return (
    <button className={styles.button}>
      {Icon}
      {Label}
    </button>
  )
}
