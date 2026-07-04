"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const returnCredits = (value: string) => {
  const creditsMapper: any = {
    0: "50",
    29: "2k",
    58: "10k",
    87: "50k",
    116: "250k",
    145: "1M",
  }

  return creditsMapper[value];
}

export const PricingSection = () => {
  const [value, setValue] = React.useState({ value: "Free", label: "50" });

  return (
    <div className={styles.pricing}>
      <div className={styles.pricing_title}>
        <svg
          width="24" height="24" viewBox="0 0 24 24"
          fill="rgb(10 10 10)" stroke="rgb(10 10 10)"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-crown-icon lucide-crown">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/>
            <path d="M5 21h14"/>
        </svg>
        <span className={styles.title_text}>Pricing</span>
      </div>
      <h1 className={styles.pricing_heading}>Flexible pricing, that scales with you</h1>
      <p className={styles.pricing_copy}>Pay only for what you use. Straightforward pricing built for growing teams</p>
      <select
        className={`${styles.pricing_select} ${styles.pricing_desktop}`}
        onChange={(event) => {
          setValue({ value: event.target.value.split("-")[0], label: event.target.value.split("-")[1] })
        }}
      >
        <button>
          {/* @ts-ignore */}
          <selectedcontent></selectedcontent>
        </button>
        <option
          className={`${styles.pricing_free} ${styles.select_option}`}
          value="Free - 50"
          selected={value.value === "Free"}
        >
          <div>
            <span className={styles.option_label}>Free</span><span className={styles.option_value}> - 50 Credits</span>
          </div>
        </option>
        <option
          className={`${styles.pricing_29} ${styles.select_option}`}
          value="$29 - 2k"
          selected={value.value === "$29"}
        >
          <div>
            <span className={styles.option_label}>$29</span><span className={styles.option_value}> - 2k Credits</span>
          </div>
        </option>
        <option className={`${styles.pricing_58} ${styles.select_option}`} value="$58 - 10k">
          <div>
            <span className={styles.option_label}>$58</span>
            <span className={styles.option_value}> - 10k Credits</span>
          </div>
        </option>
        <option className={`${styles.pricing_87} ${styles.select_option}`} value="$87 - 50k">
          <div>
            <span className={styles.option_label}>$87</span>
            <span className={styles.option_value}> - 50k Credits</span>
          </div>
        </option>
        <option className={`${styles.pricing_116} ${styles.select_option}`} value="$116 - 250k">
          <div>
            <span className={styles.option_label}>$116</span>
            <span className={styles.option_value}> - 250k Credits</span>
          </div>
        </option>
        <option className={`${styles.pricing_145} ${styles.select_option}`} value="$145 - 1M">
          <div>
            <span className={styles.option_label}>$145</span>
            <span className={styles.option_value}> - 1M Credits</span>
          </div>
        </option>
      </select>


      <input
        type="range"
        id="tempB"
        name="pricing"
        list="values"
        className={styles.pricing_mobile}
        step={29}
        min={0}
        max={149}
        defaultValue={value.value === "Free" ? 0 : value.value.substring(1, value.value.length)}
        onChange={(event) => {
          let value = event.target.value;
          let label = returnCredits(value);

          setValue({
            value: `${value === "0" ? "Free" : `$${value}`}`, label,
          })
        }}
      />
      <div id="values" className={`${styles.pricing_mobile} ${styles.ticks}`}>
        <p>
          <span>Free</span> <span>50 credits</span>
        </p>
        <p>
          <span>$29</span> <span>2k credits</span>
        </p>
        <p>
          <span>$58</span> <span>10k credits</span>
        </p>
        <p>
          <span>$87</span> <span>50k credits</span>
        </p>
        <p>
          <span>$116</span> <span>250k credits</span>
        </p>
        <p>
          <span>$145</span> <span>1M credits</span>
        </p>
      </div>

      <article className={`${styles.pricing_selection}`}>
        <p>
          <span className={styles.selected_price}>{value.value}</span> for <span className={styles.selected_credits}>{value.label}</span> Credits
        </p>
        <div className={`${styles.pricing_features} ${styles.pricing_free} ${value.label === "Free" && styles.pricing_free}`}>
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <span className={styles.ps_text}>No Credit Card Required for free tier</span>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>






        
        <div className={`${styles.pricing_features} ${styles.pricing_29} ${value.label === "2k" && styles.pricing_2k}`}>
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>






        <div
          className={`${styles.pricing_features} ${styles.pricing_58} ${value.label === "10k" && styles.pricing_10k}`}
          data-popular="Popular"
        >
          {/* <span className={styles.popular}>Customers Popular Choice</span> */}
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>




        <div className={`${styles.pricing_features} ${styles.pricing_87} ${value.label === "50k" && styles.pricing_50k}`}>
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>




        <div className={`${styles.pricing_features} ${styles.pricing_116} ${value.label === "250k" && styles.pricing_250k}`}>
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>






        <div className={`${styles.pricing_features} ${styles.pricing_145} ${value.label === "1M" && styles.pricing_1M}`}>
          <ul className={styles.features_list}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>10k Credits</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Priority Support</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Early feature access</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Core integrations</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              <span className={styles.list_text}>Standard API access</span>
            </li>
          </ul>
          <Link href="#" className={styles.button}>
            <span>Get Started</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <span className={styles.ps_text}>No Credit Card Required for free tier</span>
      </article>
    </div>
  )
}
