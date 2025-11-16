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
          <span className={styles.section_icon}>G</span>
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
          <span className={styles.section_icon}>G</span>
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
          <span className={styles.section_icon}>G</span>
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
          <span className={styles.section_icon}>G</span>
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