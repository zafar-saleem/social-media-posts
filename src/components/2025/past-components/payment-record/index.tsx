import Link from "next/link";
import styles from "./payment.module.css";
import Image from "next/image";

const ICONS = {
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig1MiA1MiA1MikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  more: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig1MiA1MiA1MikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lbGxpcHNpcy1pY29uIGx1Y2lkZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiLz48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiLz48L3N2Zz4=",
  acme: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig1MiA1MiA1MikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbnZpbC1pY29uIGx1Y2lkZS1hbnZpbCI+PHBhdGggZD0iTTcgMTBINmE0IDQgMCAwIDEtNC00IDEgMSAwIDAgMSAxLTFoNCIvPjxwYXRoIGQ9Ik03IDVhMSAxIDAgMCAxIDEtMWgxM2ExIDEgMCAwIDEgMSAxIDcgNyAwIDAgMS03IDdIOGExIDEgMCAwIDEtMS0xeiIvPjxwYXRoIGQ9Ik05IDEydjUiLz48cGF0aCBkPSJNMTUgMTJ2NSIvPjxwYXRoIGQ9Ik01IDIwYTMgMyAwIDAgMSAzLTNoOGEzIDMgMCAwIDEgMyAzIDEgMSAwIDAgMS0xIDFINmExIDEgMCAwIDEtMS0xIi8+PC9zdmc+",
}

export const PaymentRecord = () => {
  return (
    <div className={styles.payment_container}>
      <header className={`${styles.payment_header} ${styles.flex}`}>
        <h1 className={styles.payment_title}>Payment Record</h1>
        <Link href="#" className={styles.payment_btn_close}>
          <Image
            src={ICONS.close}
            width={15}
            height={15}
            alt=""
          />
        </Link>
      </header>
      <main className={styles.payment_contents}>
        <div className={`${styles.payment_company} ${styles.flex} ${styles.flex_row}`}>
          <section className={`${styles.payment_company_name}`}>
            <span className={styles.payment_secondary_text}>Company</span>
            <span className={styles.payment_primary_text}>
              <Image
                src={ICONS.acme}
                width={24}
                height={24}
                alt=""
              />
              <span className={`${styles.payment_company_name}`}>Acme Corp.</span>
            </span>
          </section>


          <section className={styles.payment_company_job}>
            <span className={styles.payment_secondary_text}>Job</span>
            <span className={styles.payment_primary_text}>
              <span className={`${styles.payment_company_name}`}>Product Design / Consulting</span>
            </span>
          </section>
        </div>


        <div className={`${styles.payment_status_container} ${styles.flex}`}>
          <span className={`${styles.payment_status} ${styles.payment_status_meta}`}>
            <span className={styles.status_icon} />
            <span className={styles.status_text}>Pending</span>
          </span>
          <span className={`${styles.status_hourly} ${styles.payment_status_meta}`}>Hourly</span>
        </div>

        <ul className={styles.tasks_list}>
          <li className={`${styles.tasks_list_item} ${styles.flex} ${styles.flex_row}`}>
            <span className={`${styles.flex} ${styles.flex_column}`}>
              <span className={`${styles.task_name} ${styles.payment_secondary_text}`}>Main Task</span>
              <span className={`${styles.task_date} ${styles.payment_tertiary_text}`}>Monday, 7 May 1900</span>
            </span>
            <span className={`${styles.task_hours} ${styles.payment_secondary_text}`}>4:00</span>
          </li>
          <li className={`${styles.tasks_list_item} ${styles.flex} ${styles.flex_row}`}>
            <span className={`${styles.flex} ${styles.flex_column}`}>
              <span className={`${styles.task_name} ${styles.payment_secondary_text}`}>Main Task</span>
              <span className={`${styles.task_date} ${styles.payment_tertiary_text}`}>Thursday, 10 May 1900</span>
            </span>
            <span className={`${styles.task_hours} ${styles.payment_secondary_text}`}>1:00</span>
          </li>
          <li className={`${styles.tasks_list_item} ${styles.flex} ${styles.flex_row}`}>
            <span className={`${styles.flex} ${styles.flex_column}`}>
              <span className={`${styles.task_name} ${styles.payment_secondary_text}`}>Main Task</span>
              <span className={`${styles.task_date} ${styles.payment_tertiary_text}`}>Friday, 11 May 1900</span>
            </span>
            <span className={`${styles.task_hours} ${styles.payment_secondary_text}`}>4:00</span>
          </li>
          <li className={`${styles.tasks_list_item_total} ${styles.flex}`}>
            <span className={styles.task_total_label}>Total</span>
            <span className={styles.task_total_value}>9:00</span>
          </li>
        </ul>

        <div className={`${styles.payment_total_details} ${styles.flex}`}>
          <span className={`${styles.payment_total_working_hours} ${styles.payment_tertiary_text}`}>8 Hours of Work</span>
          <span className={`${styles.payment_total_hours_amount}`}>$5,000.00</span>
        </div>
        <div className={`${styles.payment_deduction} ${styles.flex}`}>
          <span className={`${styles.payment_deducted} ${styles.payment_tertiary_text}`}>Acme Commission</span>
          <span className={styles.payment_deducted_amount}>-$1,000.00 (20%)</span>
        </div>
      </main>
      <footer className={styles.payment_grand_total_container}>
        <span className={styles.payment_footer_text}>Take Home</span>
        <span className={styles.payment_footer_grand_total}>$4,000.00</span>
        <span className={styles.payment_footer_actions}>
          <button className={`${styles.payment_btn_export} ${styles.btn}`}>Export Invoice</button>
          <button className={`${styles.payment_btn_more} ${styles.btn}`}>
            <Image
              src={ICONS.more}
              width={24}
              height={20}
              alt=""
            />
          </button>
        </span>
      </footer>
    </div>
  )
}