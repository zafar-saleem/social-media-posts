import React from "react";
import styles from "./time-picker.module.css";

export const TimePicker = () => {
  return (
    <div className={styles.timepicker_container}>
      <input
        type="text"
        className={styles.timepicker_input}
        placeholder='Try "Tomorrow at 2PM"'
      />
      <ul className={`${styles.timepicker_dropdown}`}>
        <li className={styles.dropdown_item}>
          <label className={styles.item_label}>
            <input type="radio" name="time" />
            <span><span>Today</span> - <span>in 2 hours</span></span>
          </label>
          <span className={styles.item_controls}>
            <label className={`${styles.control} ${styles.control_repeat}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
              <span className={`${styles.repeat_tooltip} ${styles.control_tooltip}`}>
                Repeat
              </span>
            </label>
            <label className={`${styles.control} ${styles.control_skip}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo-dot-icon lucide-redo-dot"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
              <span className={`${styles.skip_tooltip} ${styles.control_tooltip}`}>
                Skip Weekends
              </span>
            </label>
          </span>
        </li>
        
        
        
        <li className={styles.dropdown_item}>
          <label className={styles.item_label}>
            <input type="radio" name="time" />
            <span><span>Tomorrow</span> - <span>Thu, 8:00 AM</span></span>
          </label>
          <span className={styles.item_controls}>
            <label className={`${styles.control} ${styles.control_repeat}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
              <span className={`${styles.repeat_tooltip} ${styles.control_tooltip}`}>
                Repeat
              </span>
            </label>
            <label className={`${styles.control} ${styles.control_skip}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo-dot-icon lucide-redo-dot"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
              <span className={`${styles.skip_tooltip} ${styles.control_tooltip}`}>
                Skip Weekends
              </span>
            </label>
          </span>
        </li>


        <li className={styles.dropdown_item}>
          <label className={styles.item_label}>
            <input type="radio" name="time" />
            <span><span>Later</span> - <span>Fri, 8:00 AM</span></span>
          </label>
          <span className={styles.item_controls}>
            <label className={`${styles.control} ${styles.control_repeat}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
              <span className={`${styles.repeat_tooltip} ${styles.control_tooltip}`}>
                Repeat
              </span>
            </label>
            <label className={`${styles.control} ${styles.control_skip}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo-dot-icon lucide-redo-dot"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
              <span className={`${styles.skip_tooltip} ${styles.control_tooltip}`}>
                Skip Weekends
              </span>
            </label>
          </span>
        </li>



        <li className={styles.dropdown_item}>
          <label className={styles.item_label}>
            <input type="radio" name="time" />
            <span><span>Next week</span> - <span>Mon, 8:00 AM</span></span>
          </label>
          <span className={styles.item_controls}>
            <label className={`${styles.control} ${styles.control_repeat}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
              <span className={`${styles.repeat_tooltip} ${styles.control_tooltip}`}>
                Repeat
              </span>
            </label>
            <label className={`${styles.control} ${styles.control_skip}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo-dot-icon lucide-redo-dot"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
              <span className={`${styles.skip_tooltip} ${styles.control_tooltip}`}>
                Skip Weekends
              </span>
            </label>
          </span>
        </li>



        <li className={styles.dropdown_item}>
          <label className={styles.item_label}>
            <input type="radio" name="time" />
            <span><span>2 weeks</span> - <span>Sep 3, 8:00 AM</span></span>
          </label>
          <span className={styles.item_controls}>
            <label className={`${styles.control} ${styles.control_repeat}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat2-icon lucide-repeat-2"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
              <span className={`${styles.repeat_tooltip} ${styles.control_tooltip}`}>
                Repeat
              </span>
            </label>
            <label className={`${styles.control} ${styles.control_skip}`}>
              <input type="checkbox" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo-dot-icon lucide-redo-dot"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
              <span className={`${styles.skip_tooltip} ${styles.control_tooltip}`}>
                Skip Weekends
              </span>
            </label>
          </span>
        </li>



        <li className={styles.dropdown_item}>
          <button>
            <span>Custom date & time</span>
          </button>
          <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(112 112 112)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
        </li>

      </ul>
    </div>
  )
}