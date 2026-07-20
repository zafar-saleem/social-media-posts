"use client";

import Link from "next/link";
import styles from "./SeatCounter.module.css";
import React from "react";

const positions = {
  1: "3.80rem",
  2: "2rem",
  3: "0rem",
  4: "-1.90rem",
  5: "-3.70rem",
}

export const SeatCounter = () => {
  const [seatCounter, setSeatCounter] = React.useState({
    seats: 1,
    left: 4,
  });

  return (
    <div className={styles.container}>
      <header className={styles.seats_header}>
        <span className={styles.header_label}>Seats</span>
        <span className={styles.chip}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(145 83 24)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
          <span className={styles.label_text}>{seatCounter.left} left</span>
        </span>
        <Link href="#" className={styles.button_info}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(160 160 160)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </Link>
      </header>
      <main className={styles.contents}>
        <section className={styles.seats_list}>
          <svg
              width="30" height="30" viewBox="0 0 24 24" fill="rgb(40 40 40)" stroke="rgb(40 40 40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className={`lucide lucide-armchair-icon lucide-armchair ${seatCounter.seats >= 1 && styles.selected_seat}`}>
            <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" className={styles.seat_back} />
            <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
            <path d="M5 18v2"/>
            <path d="M19 18v2"/>
          </svg>
          <svg
              width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(180 180 180)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className={`lucide lucide-armchair-icon lucide-armchair ${seatCounter.seats >= 2 && styles.selected_seat}`}>
            <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" className={styles.seat_back} />
            <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
            <path d="M5 18v2"/>
            <path d="M19 18v2"/>
          </svg>
          <svg
            width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(180 180 180)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className={`lucide lucide-armchair-icon lucide-armchair ${seatCounter.seats >= 3 && styles.selected_seat}`}>
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" className={styles.seat_back}/>
              <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
              <path d="M5 18v2"/>
              <path d="M19 18v2"/>
            </svg>
          <svg
            width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(180 180 180)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className={`lucide lucide-armchair-icon lucide-armchair ${seatCounter.seats >= 4 && styles.selected_seat}`}>
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" className={styles.seat_back}/>
              <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
              <path d="M5 18v2"/>
              <path d="M19 18v2"/>
            </svg>
          <svg
            width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(180 180 180)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className={`lucide lucide-armchair-icon lucide-armchair ${seatCounter.seats === 5 && styles.selected_seat}`}>
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" className={styles.seat_back}/>
              <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
              <path d="M5 18v2"/>
              <path d="M19 18v2"/>
            </svg>
        </section>
        <section className={styles.counter}>
          <button
            className={styles.button_decrement}
            onClick={() => {
              setSeatCounter(() => {
                if (seatCounter.seats > 1) {
                  return {
                    seats: seatCounter.seats - 1,
                    left: seatCounter.left + 1,
                  };
                }

                return seatCounter;
              })
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-minus-icon lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
          </button>
          <section className={`${styles.button_label}`} style={{ "--pos-y": positions[seatCounter.seats] }}>
            {/* {seatCounter.seats} */}
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </section>
          <button
            className={styles.button_decrement}
            onClick={() => {
              setSeatCounter(() => {
                if (seatCounter.seats < 5) {
                  return {
                    seats: seatCounter.seats + 1,
                    left: seatCounter.left - 1,
                  }
                }

                return seatCounter;
              })
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
          </button>
        </section>
        <p className={styles.text}>
          Add seats now and upgrade later if you need more.
        </p>
        <button className={styles.button_upgrade}>Upgrade</button>
      </main>
    </div>
  )
}