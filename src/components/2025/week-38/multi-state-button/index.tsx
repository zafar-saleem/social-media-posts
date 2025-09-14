"use client";

import React from "react";
import styles from "./button.module.css";

const InitialState = () => (
  <>
    <span className={styles.label}>Next</span>
    <span className={styles.icons}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(160 160 169)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(113 113 118)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    </span>
  </>
)

const PendingState = ({ state }: { state: string }) => {
  return (
    <span className={`${styles[state]} ${styles.loader}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(114 113 121)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-icon lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
    </span>
  )
}

const SuccessState = () => (
  <span className={styles.success}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(63 63 70)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  </span>
)

const renderStates: any = {
  initialState: () => <InitialState />,
  pending: (props: { state: string }) => <PendingState {...props} />,
  success: () => <SuccessState />
}

export const MultiStateButton = () => {
  const [currentState, setCurrentState] = React.useState("initialState");

  React.useEffect(() => {
    if (currentState === "initialState") return;

    setTimeout(() => {
      setCurrentState("success");
      console.log("ASDAS");
    }, 2000);
  }, [currentState]);

  return (
    <button
      className={`${currentState === "pending" || currentState === "success" ? styles.active_state : ""} ${styles.button}`}
      onClick={() => setCurrentState("pending")}
    >
      {renderStates[currentState]({ state: currentState })}
    </button>
  )
}
