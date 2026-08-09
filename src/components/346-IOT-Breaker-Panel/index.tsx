"use client";

import React from "react";
import styles from "./styles.module.css";

export const IOTBreakerPanel = () => {
  const [meter, setMeter] = React.useState(0);

  return (
    <div className={styles.panel}>
      <div className={styles.panel_header}>
        <span className={styles.panel_title}>Breaker Panel</span>
        <BreakerStatus value={meter} />
      </div>
      <div className={styles.panel_breakers}>
        <div className={styles.breakers_main}>
          <label className={styles.switch}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.switch_label}>MAIN</span>
          </label>

          <div className={styles.main_progress}>
            <div className={styles.progress_box}>
              <span className={styles.box_label}>Load</span>
              <p className={styles.box_total}>
                <span className={styles.total_current}>{Number(meter.toFixed(2))}</span> <span className={styles.total}>/ 40 A</span>
              </p>
            </div>

            <div className={styles.meter}>
              <meter className={styles.progress_meter} min={0} max={40} value={meter}></meter>
              <div className={styles.meter_ticks}>
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circuits}>
          <span className={styles.circuits_label}>Circuits</span>
          <ul className={styles.breakers_list}>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 3.2);
                      return;
                    }
                    setMeter(prev => prev - 3.2);
                  }}
                />
                <span className={styles.switch_label}>Lights</span>
              </label>
              <span className={styles.item_total}>3.2 A</span>
            </li>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 7.8);
                      return;
                    }
                    setMeter(prev => prev - 7.8);
                  }}
                />
                <span className={styles.switch_label}>Kitchen</span>
              </label>
              <span className={styles.item_total}>7.8 A</span>
            </li>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox" className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 11.5);
                      return;
                    }
                    setMeter(prev => prev - 11.5);
                  }}
                />
                <span className={styles.switch_label}>HVAC</span>
              </label>
              <span className={styles.item_total}>11.5 A</span>
            </li>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox" className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 9.6);
                      return;
                    }
                    setMeter(prev => prev - 9.6);
                  }}
                />
                <span className={styles.switch_label}>Dryer</span>
              </label>
              <span className={styles.item_total}>9.6 A</span>
            </li>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox" className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 15.8);
                      return;
                    }
                    setMeter(prev => prev - 15.8);
                  }}
                />
                <span className={styles.switch_label}>EV Charger</span>
              </label>
              <span className={styles.item_total}>15.8 A</span>
            </li>
            <li className={styles.breakers_item}>
              <label className={styles.switch}>
                <input
                  type="checkbox" className={styles.input}
                  onChange={event => {
                    if (event.currentTarget.checked) {
                      setMeter(prev => prev + 4.1);
                      return;
                    }
                    setMeter(prev => prev - 4.1);
                  }}
                />
                <span className={styles.switch_label}>Office</span>
              </label>
              <span className={styles.item_total}>4.1 A</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const BreakerStatus = ({ value }) => {
  if (value > 40) {
    return (
      <span className={styles.panel_status}>Overload</span>
    )
  }
  
  if (value === 0) {
    return (
      <span className={styles.panel_status}>Tripped</span>
    )
  }

  return null;
}