"use client";

import React from "react";
import styles from "./styles.module.css";

const position: any = {
  0: 0,
  1: -2,
  2: -4,
  3: -6,
  4: -8,
};

const nextStepPositions: any = {
  0: -0.5,
  1: -2,
  2: -3.5,
  3: -5,
  4: -6.5
}

export const ProfileCompletenessRing = () => {
  const [angle, setAngle] = React.useState(0);

  return (
    <section className={styles.profile_ring}>
      <section className={styles.ring} style={{ "--updatedAngle": `${90 * angle}deg` }}>
        <span className={styles.progress_percentage}>{angle / 4 * 100}%</span>
        <span>{angle} of 4</span>
      </section>
      <section className={styles.profile_info}>
        <span className={styles.title}>Profile completion</span>
        <span className={styles.text}>Required steps:</span>
        <section className={styles.steps_list} style={{ "--position-y": `${position[angle]}rem`}}>
          <div className={`${styles.steps} ${styles.photo}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(8 103 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Upload Photo</span>
          </div>
          <div className={`${styles.steps} ${styles.email}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(6 95 201)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <span>Verify Email</span>
          </div>
          <div className={`${styles.steps} ${styles.company}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(8 103 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
            <span>Add Company</span>
          </div>
          <div className={`${styles.steps} ${styles.attachment}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(8 103 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
            <span>Upload Attachment</span>
          </div>
          <div className={`${styles.steps} ${styles.completion}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(8 103 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-check-icon lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>
            <span>Profile Completed</span>
          </div>
        </section>
        <button className={`${angle === 4 && styles.completed} ${styles.button}`} onClick={() => setAngle(() => {
          if (angle < 4) return angle + 1;
          return angle;
        })}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          <span className={`${styles.button_label}`}>
            {angle === 4 ? `Finished` : `Mark completed`}
          </span>
        </button>
        <section className={styles.next_step} style={{ "--position-y": `${nextStepPositions[angle]}rem`}}>
          <div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 151 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            <span>Next step: Verify Email</span>
          </div>
          <div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 151 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            <span>Next step: Add Company</span>
          </div>
          <div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 151 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            <span>Next step: Attachment</span>
          </div>
          <div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 151 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            <span>Final Step</span>
          </div>
          
          <div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(151 151 153)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            <span>Done</span>
          </div>
        </section>
      </section>
    </section>
  )
}
