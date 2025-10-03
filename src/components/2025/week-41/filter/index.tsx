"use client";

import React from "react";
import styles from "./filter.module.css";

export const Filter = () => {
  const [appliedFilters, setAppliedFilters] = React.useState<number>(1);
  const [numberOfToilets, setToilets] = React.useState(0);

  return (
    <form className={styles.container}>
      <section className={styles.form_block}>
        <div className={styles.block_title}>
          <span className={styles.form_title}>Filter</span>
          <span className={styles.form_info}>{appliedFilters > 0 && `${appliedFilters} applied`}</span>
        </div>
        <label className={`${styles.search_input} ${styles.input}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          <input type="search" className={`${styles.search_field} ${styles.form_field}`} placeholder="Search filters" />
        </label>
        <ul className={styles.filter_types}>
          <li className={styles.filter_item}>
            <label>
              <span>All</span>
              <input type="radio" name="filter" defaultChecked onChange={() => setAppliedFilters(1)} />
            </label>
          </li>
          <li className={styles.filter_item}>
            <label>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <input type="radio" name="filter" />
            </label>
          </li>
          <li className={styles.filter_item}>
            <label>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-person-standing-icon lucide-person-standing"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
              <input type="radio" name="filter" />
            </label>
          </li>
          <li className={styles.filter_item}>
            <label>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-parking-icon lucide-square-parking"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
              <input type="radio" name="filter" />
            </label>
          </li>
          <li className={styles.filter_item}>
            <label>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves-ladder-icon lucide-waves-ladder"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></svg>
              <input type="radio" name="filter" />
            </label>
          </li>
          <li className={styles.filter_item}>
            <label>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
              <input type="radio" name="filter" />
            </label>
          </li>
        </ul>
      </section>

      <section className={styles.form_block}>
        <label className={`${styles.input}`}>
          <span className={styles.label}>City</span>
          <input type="text" className={`${styles.form_field}`} placeholder="Type a city" />
        </label>
      </section>
      <section className={styles.form_block}>
        <label className={`${styles.input}`}>
          <span className={styles.label}>Style</span>
          <select className={`${styles.form_field}`}>
            <option>Choose an option</option>
            <option>Style One</option>
            <option>Style Two</option>
          </select>
        </label>
      </section>

      <section className={`${styles.filter_inners} ${styles.form_block}`}>
        <section>
          <span className={styles.label}>Toilets</span> <span>({numberOfToilets} selected)</span>
        </section>
        <div>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
            </span>
            <input
              type="radio"
              className={`${styles.form_field}`}
              name="toilets"
              onChange={() => {
                setAppliedFilters(2);
                setToilets(1);
              }}
            />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
            </span>
            <input
              type="radio"
              className={`${styles.form_field}`}
              name="toilets"
              onChange={() => {
                setAppliedFilters(2);
                setToilets(2);
              }}
            />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(37 37 37)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet-icon lucide-toilet"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>
            </span>
            <input
              type="radio"
              className={`${styles.form_field}`}
              name="toilets"
              onChange={() => {
                setAppliedFilters(2);
                setToilets(3);
              }}
            />
          </label>
        </div>
      </section>
      <section className={`${styles.filter_inners} ${styles.form_block}`}>
        <span className={styles.label}>Bedrooms</span>
        <div>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>1</span>
            <input type="checkbox" className={`${styles.form_field}`} name="toilets" onChange={() => setAppliedFilters(3)} />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>2</span>
            <input type="checkbox" className={`${styles.form_field}`} name="toilets" onChange={() => setAppliedFilters(3)} />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>3</span>
            <input type="checkbox" className={`${styles.form_field}`} name="toilets" onChange={() => setAppliedFilters(3)} />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>4</span>
            <input type="checkbox" className={`${styles.form_field}`} name="toilets" onChange={() => setAppliedFilters(3)} />
          </label>
          <label className={`${styles.input_label}`}>
            <span className={styles.text}>5+</span>
            <input type="checkbox" className={`${styles.form_field}`} name="toilets" onChange={() => setAppliedFilters(3)} />
          </label>
        </div>
      </section>
    </form>
  )
}