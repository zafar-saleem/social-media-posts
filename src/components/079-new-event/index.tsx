"use client";

import React from "react";
import styles from "./event.module.css";

export const NewEvent = () => {
  const [permission, setPermission] = React.useState("");

  return (
    <div>
      <div className={styles.overlay}></div>    
      <form className={styles.event}>
        <header className={styles.event_header}>
          <span className={styles.event_title}>Create New Event</span>
          <button className={styles.btn_close}>+</button>
        </header>
        <main className={styles.event_content}>
          <div className={styles.fieldset}>
            <label className={styles.field_block}>
              <span className={styles.label}>Event name</span>
              <input type="text" className={`${styles.input}`} placeholder="Community name"/>
            </label>
          </div>
          <div className={styles.fieldset}>
            <span className={styles.fieldset_label}>Event type</span>
            <section>
              <label>
                <input type="radio" name="type" className={styles.radio} />
                <span className={styles.label}>In-Person (Limited capacity)</span>
              </label>
            </section>
            <section>
              <label>
                <input type="radio" name="type" className={styles.radio} />
                <span className={styles.label}>Virtual (Unlimited attendence)</span>
              </label>
            </section>
          </div>
          <div className={styles.fieldset}>
            <label className={styles.field_block}>
              <span className={styles.label}>Add participants</span>

              <span className={styles.icon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
              </span>

              <input type="text" className={`${styles.input_name} ${styles.input}`} placeholder="zafar@email.com" />


              <label className={styles.event_permissions}>
                <input type="checkbox" className={styles.btn_permissions} />
                {
                  permission === "can view"
                  ?
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  :
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                }
                <span className={styles.label}>{permission || `set permissions`}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                <div className={styles.permissions_contents}>
                  <ul>
                    <li>
                      <label>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                        <span className={styles.label}>can view</span>
                        <input type="radio" name="type" className={styles.radio_input} onChange={() => setPermission("can view")} />
                      </label>
                    </li>
                    <li>
                      <label>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(124 124 124)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                        <span className={styles.label}>can edit</span>
                        <input type="radio" name="type" className={styles.radio_input} onChange={() => setPermission("can edit")} />
                      </label>
                    </li>
                  </ul>
                </div>
              </label>
            </label>
          </div>
        </main>
        <footer className={styles.event_footer}>
          <button className={`${styles.btn} ${styles.btn_cancel} button_three`}>Cancel</button>
          <button className={`${styles.btn} ${styles.btn_create} button_three`}>Create event</button>
        </footer>
      </form>
    </div>
  )
}