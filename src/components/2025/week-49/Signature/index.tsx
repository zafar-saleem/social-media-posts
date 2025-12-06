"use client";

import React from "react";
import styles from "./styles.module.css";
import SingaturePad from "react-signature-canvas";
import { useButtonLabel } from "./Store";

export const Signature = () => {
  const buttonLabel = useButtonLabel((state) => state?.buttonLabel);
  const sigCanvas = React.useRef<any>(null);

  return (
    <section
      className={`
        ${styles.container}
        ${buttonLabel === "Finish Signing" ? styles.expand : null}
        ${buttonLabel === "Signing Done" ? styles.collapse : null}
      `}
    >
      <div className={styles.header}>
        <button
          className={styles.button_clear}
          onClick={() => sigCanvas.current.clear()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(205 205 205)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw-icon lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
        </button>
        <h1 className={styles.title}>Sign</h1>
        <button className={styles.button_close}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(205 205 205)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <SingaturePad
        ref={sigCanvas}
        canvasProps={{
          className: "signature_pad",
          width: 300, height: 200,
        }}
      />
      <Controls />
    </section>
  )
}

export const Controls = () => {
  const buttonLabel = useButtonLabel(state => state?.buttonLabel);

  if (buttonLabel === "Start Signing" || buttonLabel === "Finish Signing") {
    return (
      <Button classText="" />
    )
  }
  
  return (
    <>
      <Button classText="button_done" />
      <Button classText="button_edit" />
    </>
  )
}

export const Button = ({ classText }: { classText: string }) => {
  const setLabel = useButtonLabel(state => state?.setButtonLabel);
  const buttonLabel = useButtonLabel(state => state?.buttonLabel);

  const updateLabel = () => {
    if (buttonLabel === "Start Signing") {
      return setLabel("Finish Signing");
    }

    if (buttonLabel === "Finish Signing") {
      return setLabel("Signing Done");
    }
    
    if (buttonLabel === "Signing Done") {
      return setLabel("");
    }
  }

  return (
    <button
      className={`${styles.button} ${styles[classText]}`}
      onClick={() => updateLabel()}
      disabled={classText ? true : false}
    >
      <ButtonIcon />
      {classText !== "button_edit" && buttonLabel}
      {classText === "button_edit" && <ButtonIcon classText={classText} />}
    </button>
  )
}

export const ButtonIcon = ({ classText }: { classText?: string }) => {
  const buttonLabel = useButtonLabel(state => state?.buttonLabel);

  if (classText) {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
  }

  if (buttonLabel === "Start Signing" || buttonLabel === "Finish Signing") {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic-vocal-icon lucide-mic-vocal"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/></svg>;
  }
  
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(254 254 254)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
}
