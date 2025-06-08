"use client";

import React from "react";
import styles from "./storage-plan.module.css";
import Image from "next/image";

type Props = {
  type: string;
  period: boolean;
}

const PlanType = ({type, period}: Props) => {
  if (type === "basic" && period) {
    return <span className={styles.storage_summary_period}>
      €8 per month
    </span>
  }

  if (type === "basic" && !period) {
    return <span className={styles.storage_summary_period}>
      €48 per year
    </span>
  }

  if (type === "advance" && period) {
    return <span className={styles.storage_summary_period}>
      €15 per month
    </span>
  }

  if (type === "advance" && !period) {
    return <span className={styles.storage_summary_period}>
      €80 per year
    </span>
  }

  if (type === "enterprise" && period) {
    return <span className={styles.storage_summary_period}>
      €30 per month
    </span>
  }

  if (type === "enterprise" && !period) {
    return <span className={styles.storage_summary_period}>
      €180 per year
    </span>
  }
}

export const StoragePlan = () => {
  const [isMonthly, setIsMonthly] = React.useState<boolean>(false);
  const [planType, setPlanType] = React.useState<string>("basic");

  return (
    <div className={styles.storage_container}>
      <div className={styles.storage_plan}>
        <div className={styles.storage_plan_header}>
          <span className={styles.storage_title}>Choose storage plan</span>
          <div className={styles.storage_tabs_container}>
            <button className={`${isMonthly ? styles.storage_tab_active : null} ${styles.storage_tab}`} onClick={() => { setIsMonthly(true) }}>
              <span className={`${styles.storage_tab_label}`}>Monthly</span>
            </button>
            <button className={`${isMonthly ? null : styles.storage_tab_active} ${styles.storage_tab}`} onClick={() => { setIsMonthly(false) }}>
              <span className={styles.storage_tab_label}>Yearly</span>
            </button>
          </div>
        </div>


        <ul className={styles.storage_plan_items}>
          <li className={`${planType === "basic" ? styles.storage_plan_selected : null}  ${styles.storage_plan_item}`}>
            <input checked={planType === "basic" ? true : false} type="radio" className={styles.storage_input} id="basic_plan" name="plan" onChange={() => { setPlanType("basic") }} />
            <label className={`${styles.storage_item_label}`} htmlFor="basic_plan">
              <div>
                <span className={styles.storage_item_text}>
                <span className={styles.label}>100GB Storage</span>
                  <span className={styles.badge}>Current</span>
                </span>
                <span className={styles.storage_item_desc}>Basic file storage</span>
              </div>
              <span className={styles.storage_price}>{isMonthly ? '€8 per month' : '€48 per year'}</span>
            </label>
          </li>


          <li className={`${planType === "advance" ? styles.storage_plan_selected : null} ${styles.storage_plan_item}`}>
            <input checked={planType === "advance" ? true : false} type="radio" className={styles.storage_input} id="advance_plan" name="plan" onChange={() => { setPlanType("advance") }} />
            <label className={`${styles.storage_item_label}`} htmlFor="advance_plan">
              <div>
                <span className={styles.storage_item_text}>
                  <span className={styles.label}>1TB Storage</span>
                  <span className={styles.popularity_badge}>
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2aT2jcRRTHJ2lre2mtFrTWQrHsb94v28SDKVIoZC/V7L6XrRGJILZSaOtBBfXSUjwEWgqlB0sPCoJQW+hNFGmpoPZQEfsHwYN/MIV4sJgIHlSaVknz9ltmNwnbJpvdX/Kb3/5+4BfedWY+8+a9mXkzxvyv5tpUwCoreplELxqDDpNVhYyXSCpwFjD6TFZlRb+YAbGip0wWlStiI7FO1YFM5IpYY7Imy1PDMxCzMCXsM9kSOkh0dA4I67cmSwoEO+6HmLFcEXmTFVnRs41ArOhxkwVt3oEHLeuthiCsf/T2YoVJu2wJrzeCmIUZwKBJu6zod01BWD8zaRaV0NMMYjpO7oT9eMykVVb0ZCsgNRgcMGlUfggPEOufrYPoSCoPkpbxYqsQdTv9dpM2kejnUUFI9MNEB7npOax1h8CA0RUInq7u3CW8QIw9oeANYrxTf0Bs2SOsN63goGW8FgheCQTPT7e9lfpBgeDxlg+agWA/iZ4h1k9I9EuXPq3oL5b1dxL9J/os+zL9m0RvkOjPxHpteqwfW9aPSDDkMs1E+we5ZMhRF6TFGm27B7MUT6G/urzyZeRI9Kf2D6oSySzrdRe398QK7cRqYv00Q5644JJQg9BHh8sixKopBqiQ6DEzjM6mmcxlgXQmAf3XMnaZKLJlPEmsv7Z/8JWasf4WCnrNYhQOYh2xfpUCiK83P4NHzFJUKGC5W5PtgrCiH8R6oyTBy8R6O8F4+M8y9hofCgfwlFurCXhhLCxim/Ep2okNtbOOt3i45vrwCjELw3rC45J61yQly/qjt2XF+kMiEHnG+tru6s0jlUQKE+4C5D3YGbu9g1QvYZ5BiPW0Zwx3qNQx7x4RHfdaYQkF3d69ITXrKmOLNxAreCspEBK86Q2ERM9HXCKTlvVo1UQno4HoeW+VRFe+iTCQ7+uP3dW6MOvVCJMwkStiZewg4QAKLWac2+6WaYawbE4jw+gMBa+2OiGBjydtK3qkBS9cCkuwTdsq44n6p+sFJuVw7CAkemWBDv9yMx01Zbor9UKFbyt6OVYIV61oVBK1oudcaXOxbXeX8WjDTZZ1qkfwUGwgriY7D8C4q//G1gdD5rvrxPpMR6zv31eOOZN/Fg8bHw+poifvLUfpe7F1QKLfTHthJInPMQGjz/UV+ycD13AoOOS+LZkkv0gx3nZpP6k+U6G7MtDlE+0rvpMAAAAASUVORK5CYII="
                      width={10}
                      height={10}
                      alt=""
                    />
                    <span>Most Popular</span>
                  </span>
                </span>
                <span className={styles.storage_item_desc}>Advanced file storage</span>
              </div>
              <span className={`${styles.advance} ${styles.storage_price}`}>{isMonthly ? '€15 per month' : '€80 per year'}</span>
            </label>
          </li>



          <li className={`${planType === "enterprise" ? styles.storage_plan_selected : null} ${styles.storage_plan_item}`}>
            <input checked={planType === "enterprise" ? true : false} type="radio" className={styles.storage_input} id="business_plan" name="plan" onChange={() => { setPlanType("enterprise") }} />
            <label className={`${styles.storage_item_label}`} htmlFor="business_plan">
              <div>
                <span className={styles.storage_item_text}>
                  <span className={styles.label}>5TB Storage</span>
                  <span className={styles.category_badge}>(Business)</span>
                </span>
                <span className={styles.storage_item_desc}>Enterprise-grade storage</span>
              </div>
              <span className={styles.storage_price}>{isMonthly ? '€30 per month' : '€180 per year'}</span>
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.storage_summary}>
        <span className={styles.storage_title}>Summary</span>
        <p className={styles.storage_summary_desc}>
          <span className={styles.storage_summary_label}>Current plan</span>
          <span className={styles.storage_summary_period}>€8 per month</span>
        </p>
        <p className={styles.storage_summary_new}>
          <span className={styles.storage_summary_new_label}>New plan</span>
          <PlanType type={planType} period={isMonthly} />
        </p>

        <p className={styles.storage_summary_total}>
          <span className={styles.storage_summary_total_label}>Total</span>
          <PlanType type={planType} period={isMonthly} />
        </p>

        <button className={`${styles.summary_btn_cancel} ${styles.summary_btn}`}>Cancel</button>
        <button className={`${styles.summary_btn_submit} ${styles.summary_btn}`}>Submit</button>
      </div>
    </div>
  )
}
