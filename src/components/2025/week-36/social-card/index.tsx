"use client";

import Image from "next/image";
import styles from "./social.module.css";
import React from "react";

export const SocialMediaCard = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className={styles.card}>
      <header className={styles.card_header}>
        <span className={styles.card_avatar}>
        </span>
        <span className={styles.card_username}>Zafar Saleem</span>
        <span className={styles.card_handle}>@zafartalks</span>
      </header>
      <main className={styles.card_contents}>
        <p>
          A peek into our design sprint in action. From sticky notes from whiteboard to quick prototype testing.
        </p>
        <Image
          className={styles.card_media}
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
          width={100}
          height={100}
          alt=""
        />
      </main>
      <footer className={styles.card_footer}>
        <span>
          <button
            className={`${isClicked ? styles.pressed : null} ${styles.btn_like}`}
            onClick={() => setIsClicked(!isClicked)}
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(233 65 67)" stroke="rgb(233 65 67)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(233 65 67)" stroke="rgb(233 65 67)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(233 65 67)" stroke="rgb(233 65 67)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(233 65 67)" stroke="rgb(233 65 67)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
            </span>
            <span>143</span>
          </button>
        </span>
        <span>
          <button className={styles.btn_comment}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(144 150 166)" stroke="rgb(144 150 166)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
            </span>
            <span>83</span>
          </button>
        </span>
        <span>
          <button className={styles.btn_share}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(144 150 166)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </span>
            <span>113</span>
          </button>
        </span>
      </footer>
    </div>
  )
}