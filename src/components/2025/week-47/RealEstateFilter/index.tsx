"use client";

import React from "react";
import styles from "./styles.module.css";

export const RealEstateFilters = () => {
  const [rangeValues, setRangeValues] = React.useState({ min: 100, max: 10000 });

  return (
    <aside className={styles.filter}>
      <section className={styles.filter_header}>
        <h1>Filter</h1>
        <button>Clean All</button>
      </section>

      <section className={`${styles.filter_section} ${styles.filter_type}`}>
        <div className={styles.section_header}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(26 26 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>
          <span className={styles.section_label}>Home type</span>
        </div>
        <ul className={styles.types_list}>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="type" className={styles.label_input} />
              <span className={styles.label_text}>Apartment</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="type" className={styles.label_input} />
              <span className={styles.label_text}>Cottage</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="type" className={styles.label_input} />
              <span className={styles.label_text}>House</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="type" className={styles.label_input} />
              <span className={styles.label_text}>Show All</span>
            </label>
          </li>
        </ul>
      </section>
      
      
      
      
      
      <section className={`${styles.filter_section} ${styles.filter_type}`}>
        <div className={styles.section_header}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(26 26 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="m16 19 3 3 3-3"/><path d="M18 12h.01"/><path d="M19 16v6"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg>
          <span className={styles.section_label}>Price range</span>
        </div>
        <div className={`${styles.types_list} ${styles.list_range}`}>
          <div>
          <label>$</label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Min value"
            className={styles.input_range}
            defaultValue={rangeValues.min}
            onChange={(event) => {
              setRangeValues(() => {
                const value = event.target.valueAsNumber;
                
                if (value < 100 || value > 5000) return rangeValues;

                return { ...rangeValues, min: event.target.valueAsNumber || 0 };
              });
            }}
          />
          </div>
          <span>-</span>
          <div>
          <label>$</label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Max value"
            className={styles.input_range}
            defaultValue={rangeValues.max}
            onChange={(event) => {
              setRangeValues(() => {
                const value = event.target.valueAsNumber;
                
                if (value > 10000 || value < 5000) return rangeValues;

                return { ...rangeValues, max: event.target.valueAsNumber || 200 };
              });
            }}
          />
          </div>
        </div>
      </section>





      <section className={`${styles.filter_section} ${styles.filter_type}`}>
        <div className={styles.section_header}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(26 26 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span className={styles.section_label}>Rooms</span>
        </div>
        <ul className={styles.types_list}>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="rooms" className={styles.label_input} />
              <span className={styles.label_text}>1-2</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="rooms" className={styles.label_input} />
              <span className={styles.label_text}>2-3</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="rooms" className={styles.label_input} />
              <span className={styles.label_text}>4+</span>
            </label>
          </li>
        </ul>
      </section>
      
      
      
      <section className={`${styles.filter_section} ${styles.filter_type}`}>
        <div className={styles.section_header}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(26 26 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-panel-left-icon lucide-layout-panel-left"><rect width="7" height="18" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>
          <span className={styles.section_label}>Layout Selection</span>
        </div>
        <ul className={styles.types_list}>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="layout" className={styles.label_input} />
              <span className={styles.label_text}>Studio</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="layout" className={styles.label_input} />
              <span className={styles.label_text}>2 Bedrooms</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <input type="radio" name="layout" className={styles.label_input} />
              <span className={styles.label_text}>3 Bedrooms</span>
            </label>
          </li>
        </ul>
      </section>
    </aside>
  )
}