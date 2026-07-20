import React from "react";
import styles from "./task.module.css";
import Link from "next/link";

export const AddTask = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <form className={styles.add_task}>
        <div className={styles.task_meta}>
          <span className={styles.task_title}>Design Product Page</span>
          <section className={styles.task_priority}>
            <span className={styles.priority_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock12-icon lucide-clock-12">
                <path d="M12 6v6" className={styles.clock} />
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </span>
            <label className={`${styles.priority_low} ${styles.priority_action}`}>
              <input type="radio" name="priority" defaultChecked />
              <span>Low</span>
            </label>
            <label className={`${styles.priority_medium} ${styles.priority_action}`}>
              <input type="radio" name="priority" />
              <span>Medium</span>
            </label>
            <label className={`${styles.priority_high} ${styles.priority_action}`}>
              <input type="radio" name="priority" />
              <span>High</span>
            </label>
          </section>

          <label className={styles.task_date}>
            <span className={styles.date_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(121 121 121)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check">
                <path d="M8 2v4"/>
                <path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <path d="M3 10h18"/>
                <path d="m9 16 2 2 4-4" className={styles.date_check} />
              </svg>
            </span>
            <input
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]} 
            />
          </label>
          
          
          <label className={styles.task_progress}>
            <span className={styles.progress_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(121 121 121)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-start-vertical-icon lucide-align-start-vertical">
                <rect width="9" height="6" x="6" y="14" rx="2" className={styles.rect} />
                <rect width="16" height="6" x="6" y="4" rx="2" className={styles.rect} />
                <path d="M2 2v20"/>
              </svg>
            </span>
            <select>
              <option value="ready">Ready</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          
          <label className={styles.task_assign}>
            <span className={styles.assign_icon}>
              <svg className={styles.bell} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(121 121 121)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-ring-icon lucide-bell-ring">
                <path d="M10.268 18a2 2 0 0 0 3.464 0" className={styles.dong} />
                <path d="M22 8c0-2.3-.8-4.3-2-6"/>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
                <path d="M4 2C2.8 3.7 2 5.7 2 8"/>
              </svg>
            </span>
            <select>
              <optgroup label="Design Team">
                <option value="rek">Rek</option>
                <option value="olle">Olle</option>
              </optgroup>
              <optgroup label="Engineering Team">
                <option value="rek">Maro</option>
                <option value="olle">Senger</option>
                <option value="ranker">Faring</option>
              </optgroup>
              <optgroup label="Product Team">
                <option value="rek">Danker</option>
                <option value="ranker">Xorer</option>
              </optgroup>
              <optgroup label="Business Team">
                <option value="rek">Reamn</option>
              </optgroup>
            </select>
          </label>
          <span className={styles.separator} />
        </div>



        <ul className={styles.task_list}>
          <li className={styles.task_item}>
            <input type="checkbox" className={styles.task_done} defaultChecked />
            <span className={styles.item_label}>Create illustration for hero section</span>
            <button type="button" className={styles.delete_icon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(119 119 119)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </li>
          <li className={styles.task_item}>
            <input type="checkbox" className={styles.task_done} />
            <span className={styles.item_label}>Change copy to match the document</span>
            <button type="button" className={styles.delete_icon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(119 119 119)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </li>
          <li className={styles.task_item}>
            <input type="checkbox" className={styles.task_done} />
            <span className={styles.item_label}>Add a dark mode version</span>
            <button type="button" className={styles.delete_icon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(119 119 119)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </li>
        </ul>



        <div className={styles.task_desc}>
          <span className={styles.section_title}>Comments & Description</span>
          <article className={styles.comment}>
            <span className={styles.user_avatar}>
              <svg width="20" height="20" viewBox="0 0 24 18" fill="none" stroke="rgb(121 121 121)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            </span>
            <p className={styles.text}>
              <Link href="#" className={styles.mention}>@jason</Link> let me know if we can add animations to the landing page.
            </p>
          </article>
          <div className={styles.comment_section}>
            <textarea rows={2} cols={10} className={styles.input_comment} placeholder="Add comment"></textarea>
            <span className={styles.actions}>
              <button className={styles.attach_icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(121 122 124)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
              </button>
              <button className={styles.add_new_comment}>Add</button>
            </span>
          </div>
        </div>



        <div className={styles.footer}>
          <button type="button" className={styles.btn_cancel}>
            Cancel
          </button>
          <button type="button" className={styles.btn_add}>
            <span className={styles.btn_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(254 253 253)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span>Add Task</span>
          </button>
        </div>
      </form>
    </>
  )
}
