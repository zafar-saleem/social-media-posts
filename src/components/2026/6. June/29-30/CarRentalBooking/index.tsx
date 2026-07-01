"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { CAR_DATA } from "./data";

export const CarRentalBooking = () => {
  const [total, setTotal] = React.useState({ value: "0.5", unit: "min"});

  return (
    <div className={styles.car_rental}>
      <div className={styles.rental_media}>
        {
          CAR_DATA.photos.map(item => (
            <React.Fragment key={item.id}>
              <Image
                src={item.src}
                width={1000}
                height={1000}
                alt=""
              />
            </React.Fragment>
          ))
        }
      </div>
      <div className={styles.group}>
        <div className={styles.box}>
          <h1 className={styles.rental_title}>{CAR_DATA.title}</h1>
        </div>



        <div className={styles.box}>
          <div className={styles.agency_avatar}>{CAR_DATA.agency.avatar}</div>
          <div className={styles.block}>
            <span className={styles.agency_name}>{CAR_DATA.agency.name}</span>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffd33d" stroke="#ffd33d" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
              <span className={styles.agency_ratings}>{CAR_DATA.agency.ratings.received}.0</span>
              <span className={`${styles.secondary_text} ${styles.agency_reviews}`}>{CAR_DATA.agency.ratings.reviews} Reviews</span>
            </div>
          </div>
          <Link href="#" className={styles.link}>
            <span>Rental rules</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>





        <div className={styles.box}>
          <span className={styles.box_title}>Vehicle Specifications & History</span>
          <div className={styles.car_specs}>
            <label className={styles.field}>
              <input
                type="radio" className={styles.input} name="specs"
              />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.speed.label}</span>
              </div>
              <span className={styles.value}>{CAR_DATA.car_specs.speed.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-toolbox-icon lucide-toolbox"><path d="M16 12v4"/><path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 14h20"/><path d="M8 12v4"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.engine.label}</span>
              </div>
              <span className={styles.value}>{CAR_DATA.car_specs.engine.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car-taxi-front-icon lucide-car-taxi-front"><path d="M10 2h4"/><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.drive.label}</span>
              </div>
              <span className={styles.value}>{CAR_DATA.car_specs.drive.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.color.label}</span>
              </div>
              <span className={styles.value}>{CAR_DATA.car_specs.color.value}</span>
            </label>
          </div>
          <div className={styles.car_specs}>
            <label className={styles.field}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>Car Condition</span>
              </div>
              <span>Perfect {CAR_DATA.car_rating.received}/{CAR_DATA.car_rating.total}</span>
            </label>
            <label className={styles.field}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-messages-square-icon lucide-messages-square"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>Total Reviews</span>
              </div>
              <span>{CAR_DATA.car_rating.received}/{CAR_DATA.car_rating.reviews_received}</span>
            </label>
            <label className={styles.field}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                <span className={`${styles.secondary_text} ${styles.label}`}>Clients Favorite</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal-icon lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
            </label>
          </div>
        </div>
        
        
        
        
        <div className={styles.box}>
          <span className={styles.box_title}>Plans</span>
          <div className={`${styles.car_plans} ${styles.car_specs}`}>
            <label className={styles.field}>
              <input
                type="radio"
                className={styles.input}
                name="plan"
                defaultValue={CAR_DATA.plans.minute.value}
                defaultChecked
                onChange={(event) => setTotal({ value: event.target.value, unit: CAR_DATA.plans.minute.unit })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.minute.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.minute.value}</span>
            </label>
            <label className={styles.field}>
              <input
                type="radio"
                className={styles.input}
                name="plan"
                defaultValue={CAR_DATA.plans.hourly.value}
                onChange={(event) => setTotal({ value: event.target.value, unit: "hour" })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.hourly.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.hourly.value}</span>
            </label>
            <label className={styles.field}>
              <input
                type="radio" className={styles.input} name="plan"
                defaultValue={CAR_DATA.plans.daily.value}
                onChange={(event) => setTotal({ value: event.target.value, unit: "day" })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.daily.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.daily.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="plan"
                defaultValue={CAR_DATA.plans.monthly.value}
                onChange={(event) => setTotal({ value: event.target.value, unit: "month" })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.monthly.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.monthly.value}</span>
            </label>
          </div>
        </div>



        <div className={styles.box}>
          <p className={styles.car_total}>
            <span className={styles.secondary_text}>from</span>
            <span>${total.value}</span> <span className={styles.secondary_text}>/{total.unit}</span>
          </p>
          <button className={styles.button}>Rent This Car Now</button>
        </div>
      </div>
    </div>
  )
}
