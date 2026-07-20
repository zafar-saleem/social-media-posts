import Link from "next/link";
import styles from "./pricing.module.css";

export const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pricing_list}>
        <span className={styles.title}>Flexible pricing</span>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <label className={styles.item}>
              <span className={styles.label}>Starter Plan</span>
              <span className={styles.sublabel}>For early stage teams</span>
              <input type="radio" name="pricing" className={`${styles.btn} ${styles.btn_starter}`} defaultChecked />
            </label>
            <span className={styles.icon_active}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(237 242 249)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </li>
          
          
          
          
          <li className={styles.list_item}>
            <label className={styles.item}>
              <span className={styles.label}>Growth Plan</span>
              <span className={styles.sublabel}>Most popular</span>
              <input type="radio" name="pricing" className={`${styles.btn} ${styles.btn_growth}`} />
            </label>
            <span className={styles.icon_active}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(237 242 249)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </li>
          
          
          
          
          <li className={styles.list_item}>
            <label className={styles.item}>
              <span className={styles.label}>Scale Plan</span>
              <span className={styles.sublabel}>For fast scaling startups</span>
              <input type="radio" name="pricing" className={`${styles.btn} ${styles.btn_scale}`} />
            </label>
            <span className={styles.icon_active}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(237 242 249)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </li>
        </ul>
      </div>






      <div className={`${styles.starter_plan} ${styles.pricing_details}`}>
        <span className={styles.details_title}>Starter</span>



        <div className={styles.price_tag}>
          <span className={styles.price}>$24</span> <span className={styles.occurence}>/mon</span>
        </div>



        <p>
          Ideal for ealy stage teams who need actionable insights to move forward.
        </p>





        <div>
          <Link href="#">
            <span className={styles.link_label}>Schedule a demo</span>
            <span className={styles.link_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </Link>
        </div>




        <ul className={styles.details_list}>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Access to core features
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Basic performance reporting
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Email support
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Strategy onboarding guide
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Monthly check-in summary
            </span>
          </li>
        </ul>
      </div>
      
      
      
      
      
      
      
      <div className={`${styles.growth_plan} ${styles.pricing_details}`}>
        <span className={styles.details_title}>Growth</span>



        <div className={styles.price_tag}>
          <span className={styles.price}>$79</span> <span className={styles.occurence}>/mon</span>
        </div>



        <p>
          Ideal for ealy stage teams who need actionable insights to move forward.
        </p>





        <div>
          <Link href="#">
            <span className={styles.link_label}>Schedule a demo</span>
            <span className={styles.link_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </Link>
        </div>




        <ul className={styles.details_list}>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Access to core features
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Basic performance reporting
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Email support
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Strategy onboarding guide
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Monthly check-in summary
            </span>
          </li>
        </ul>
      </div>
      
      
      
      
      
      
      <div className={`${styles.scale_plan} ${styles.pricing_details}`}>
        <span className={styles.details_title}>Scale</span>



        <div className={styles.price_tag}>
          <span className={styles.price}>$129</span> <span className={styles.occurence}>/mon</span>
        </div>



        <p>
          Ideal for ealy stage teams who need actionable insights to move forward.
        </p>





        <div>
          <Link href="#">
            <span className={styles.link_label}>Schedule a demo</span>
            <span className={styles.link_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
            </span>
          </Link>
        </div>




        <ul className={styles.details_list}>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Access to core features
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Basic performance reporting
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Email support
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Strategy onboarding guide
            </span>
          </li>
          <li className={styles.details_list_item}>
            <span className={styles.item_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 190 194)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.item_text}>
              Monthly check-in summary
            </span>
          </li>
        </ul>
      </div>




    </div>
  )
}