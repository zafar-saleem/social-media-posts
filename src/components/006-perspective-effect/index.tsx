"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import phone from "./assets/phone.gif";

export const PerspectiveEffect = () => {
  const btnRef = React.useRef(null);
  const [boxPerspective, setBoxPerspective] = React.useState({
    rotateX: 0,
    rotateY: 0,
  });

  React.useLayoutEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const box = btnRef?.current?.getBoundingClientRect();

      const constraint = 30;
      const rotateX = (event.clientX - box.x - box.width / 2) / constraint;
      const rotateY = (event.clientY - box.y - box.height / 2) / constraint;
      
      setBoxPerspective({ rotateX, rotateY });
    })
  }, []);

  return (
    <button className={styles.btn} ref={btnRef} style={{
      "--rotateX": `${boxPerspective.rotateX}deg`,
      "--rotateY": `${boxPerspective.rotateY}deg`,
      "--color": "green",
    }}>
      <Image 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kLWljb24gbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4="
        width={24}
        height={24}
        alt=""
        className={styles.me}
      />
      <Image
        src={phone}
        alt=""
        width={40}
        height={40}
        className={styles.phone}
      />
      <span className={styles.client}>Client</span>
      <span className={styles.btn_label}>Click Me</span>
    </button>
  )
}