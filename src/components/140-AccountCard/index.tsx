"use client";

import React from "react";
import styles from "./AccountCard.module.css";

export const AccountCard = () => {
  const [limit, setLimit] = React.useState(0);
  const [update, setUpdate] = React.useState(false);

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <div>
          <span className={styles.label}>Account Lockout</span>
          <p className={styles.brief}>Ensure protection of user credentials against aggressive unauthorised attempts</p>
        </div>
        <label className={styles.toggle}>
          <input type="checkbox" className={styles.toggle_button} />
        </label>
      </section>
      <section className={styles.content}>
        <section>
          <div>
            <span className={styles.label}>Maximum attempt limit</span>
            <p className={styles.desc}>The number of consecutive failed login attempts before protection is activated</p>
          </div>
          <label>
            <span className={styles.label}>Limit</span>
            <input
              type="text"
              defaultValue={limit}
              onChange={(event) => {
                setUpdate(true);
                setLimit(event.target.valueAsNumber);
              }}
            />
          </label>
        </section>
        
        <section>
          <div>
            <span className={styles.label}>Lockout duration</span>
            <p className={styles.desc}>The amount of time a user is locked out from their account after 100 failed attempts</p>
          </div>
          <div>
          <label>
            <div>
              <span>
                <input type="radio" name="lockout" />
                <span className={styles.label}>Time limit</span>
              </span>
              <div className={styles.inputs_group}>
                <input type="text" />
                <select>
                  <option>Minute</option>
                  <option>Hour</option>
                  <option>Day</option>
                </select>
              </div>
            </div>
            
          </label>
          <label>
              <span>
                <input type="radio" name="lockout" />
                <span className={styles.label}>Indefinite Lockout</span>
              </span>
              <p className={styles.value_desc}>The user will be locked from their account until manually unlocked from the Client dashboard</p>
            </label>
            </div>
        </section>
      </section>
      <section className={`${update && styles.slide} ${styles.controls}`}>
        <button className={styles.button_reset}>Reset Changes</button>
        <button className={styles.button_save}>Save Changes</button>
      </section>
    </section>
  )
}