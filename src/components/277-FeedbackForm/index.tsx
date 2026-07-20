"use client";

import React, { CSSProperties } from "react";
import styles from "./styles.module.css";

export const FeedBackForm = () => {
  const [placeholder, setPlaceholder] = React.useState("");

  return (
    <form className={styles.feedback_form} style={{ "--w": "0%"} as CSSProperties}>
      <h1 className={styles.feedback_title}>Send us feedback</h1>
      <p className={`${styles.text_size_2} ${styles.secondary_text} ${styles.feedback_text}`}>What's on your mind?</p>
      <label className={`${styles.feedback_tab_bug} ${styles.feedback_tab}`}>
        <input type="radio" className={styles.tab_input} name="tab" onChange={() => setPlaceholder("What happened? What did you expect?")} />
        <span className={styles.tab_emoji}>🐛</span>
        <span className={`${styles.text_size_2} ${styles.secondary_text} ${styles.tab_label}`}>Bug</span>
      </label>
      <label className={`${styles.feedback_tab_idea} ${styles.feedback_tab}`}>
        <input type="radio" className={styles.tab_input} name="tab" onChange={() => setPlaceholder("Describe your idea...")} />
        <span className={styles.tab_emoji}>💡</span>
        <span className={`${styles.text_size_2} ${styles.secondary_text} ${styles.tab_label}`}>Idea</span>
      </label>
      <label className={`${styles.feedback_tab_improve} ${styles.feedback_tab}`}>
        <input type="radio" className={styles.tab_input} name="tab" onChange={() => setPlaceholder("What could be better?")} />
        <span className={styles.tab_emoji}>✨</span>
        <span className={`${styles.text_size_2} ${styles.secondary_text} ${styles.tab_label}`}>Improve</span>
      </label>
      <label className={`${styles.feedback_tab_general} ${styles.feedback_tab}`}>
        <input type="radio" className={styles.tab_input} name="tab" onChange={() => setPlaceholder("Tell us anything...")} />
        <span className={styles.tab_emoji}>💬</span>
        <span className={`${styles.text_size_2} ${styles.secondary_text} ${styles.tab_label}`}>General</span>
      </label>
      <div>
        <textarea
          className={styles.feedback_textarea} name="form" placeholder={placeholder}
          required
        ></textarea>
      </div>
      <button className={styles.button_category} disabled={placeholder ? false : true}>
        {
          placeholder
          ? "Send feedback"
          : "Pick a category & write a message"
        }
      </button>
      <p className={`${styles.text_size_2} ${styles.secondary_text} ${styles.copy}`}>Your feedback help us shape the future of Bundance</p>
    </form>
  )
}