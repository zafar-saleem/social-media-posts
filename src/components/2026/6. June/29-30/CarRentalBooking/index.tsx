"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import CarSide from "./assets/car_side.png";
import React from "react";
import Link from "next/link";

const CAR_DATA = {
  id: 1,
  title: "Audi R8 Performance",
  car_rating: {
    received: 90,
    total: 100,
  },
  car_specs: {
    speed: {
      label: "0 - 100 km/h",
      value: "3.2s",
    },
    engine: {
      label: "Engine",
      value: "610 hp 5.2 I",
    },
    drive: {
      label: "Drive",
      value: "All",
    },
    color: {
      label: "Color",
      value: "Orange",
    },
  },
  plans: {
    minute: {
      label: "Minute Rate",
      value: "0.5",
      unit: "min",
    },
    hourly: {
      label: "Hourly",
      value: "24",
      unit: "hourly",
    },
    daily: {
      label: "Daily",
      value: "200",
      unit: "daily",
    },
    monthly: {
      label: "Monthly",
      value: "1100",
      unit: "monthly",
    },
  },
  agency: {
    avatar: "CA",
    name: "Car Agency",
    ratings: {
      received: 5,
      reviews: 20,
    },
    rental_rules: [],
  }
}

export const CarRentalBooking = () => {
  const [total, setTotal] = React.useState({ value: "0", unit: ""});

  return (
    <div className={styles.car_rental}>
      <div className={styles.rental_media}>
        <Image  
          src={CarSide}
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className={styles.group}>
        <div className={styles.box}>
          <h1 className={styles.rental_title}>{CAR_DATA.title}</h1>
          <p className={`${styles.secondary_text} ${styles.rental_rating}`}>
            <span>Car rating:</span>
            <span>{CAR_DATA.car_rating.received}/{CAR_DATA.car_rating.total}</span>
          </p>
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
          <span className={styles.box_title}>Technical Specifications</span>
          <div className={styles.car_specs}>
            <label className={styles.field}>
              <input
                type="radio" className={styles.input} name="specs"
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.speed.label}</span>
              <span className={styles.value}>{CAR_DATA.car_specs.speed.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.engine.label}</span>
              <span className={styles.value}>{CAR_DATA.car_specs.engine.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.drive.label}</span>
              <span className={styles.value}>{CAR_DATA.car_specs.drive.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="specs" />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.car_specs.color.label}</span>
              <span className={styles.value}>{CAR_DATA.car_specs.color.value}</span>
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
                onChange={(event) => setTotal({ value: event.target.value, unit: CAR_DATA.plans.hourly.unit })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.hourly.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.hourly.value}</span>
            </label>
            <label className={styles.field}>
              <input
                type="radio" className={styles.input} name="plan"
                defaultValue={CAR_DATA.plans.daily.value}
                onChange={(event) => setTotal({ value: event.target.value, unit: CAR_DATA.plans.daily.unit })}
              />
              <span className={`${styles.secondary_text} ${styles.label}`}>{CAR_DATA.plans.daily.label}</span>
              <span className={styles.value}>${CAR_DATA.plans.daily.value}</span>
            </label>
            <label className={styles.field}>
              <input type="radio" className={styles.input} name="plan"
                defaultValue={CAR_DATA.plans.monthly.value}
                onChange={(event) => setTotal({ value: event.target.value, unit: CAR_DATA.plans.daily.unit })}
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
          <button className={styles.button}>Book Now</button>
        </div>
      </div>
    </div>
  )
}
