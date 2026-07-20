import Image from "next/image";
import styles from "./setup.module.css";
import { ICONS } from "./icons";

export const AccountSetup = () => {
  return (
    <div className={styles.account_container}>
      <header className={styles.account_header}>
        <div className={styles.account_icon_container}>
          <Image
            src={ICONS.account}
            width={15}
            height={15}
            alt=""
          />
        </div>
        <div className={styles.account_label_container}>
          <span className={styles.account_label_text}>Account Setup</span>
          <p className={styles.account_desc}>Complete simple steps to get started.</p>
        </div>
        <button className={`${styles.btn} ${styles.btn_close}`}>
          <Image
            src={ICONS.close}
            width={20}
            height={20}
            alt=""
          />
        </button>
      </header>
      <main className={styles.account_content}>
        <details className={styles.account_accordion}>
          <summary className={styles.account_accordion_summary}>
            <div className={styles.account_icon_container}>
              <Image
                src={ICONS.account_info}
                width={15}
                height={15}
                alt=""
              />
            </div>
            <div className={styles.account_label_container}>
              <div>
                <span className={styles.account_label_text}>
                  Required Information
                  <button className={`${styles.btn} ${styles.icon_info_container}`}>i</button>
                </span>
                <p className={styles.account_desc}>Provide required information.</p>
              </div>
              <div className={styles.badge_container}>
                <span className={`${styles.badge_warning} ${styles.badge}`}>In Progress</span>
              </div>
            </div>

            <div className={`${styles.close} ${styles.account_icon_status}`}>
              <Image
                src={ICONS.arrow_light}
                width={15}
                height={15}
                alt=""
                className={styles.light}
              />
              <Image
                src={ICONS.arrow_dark}
                width={15}
                height={15}
                alt=""
                className={styles.dark}
              />
            </div>
          </summary>
          <div className={styles.account_accordion_content}>
            <form>
              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.fullname}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Full Name</span>
                </label>
                <input type="text" name="name" defaultValue={`Zafar Saleem`} />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.phone}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Phone</span>
                </label>
                <input type="tel" name="name" defaultValue={`+35100000000`} />
              </div>


              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.dob}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Date of Birth</span>
                </label>
                <input type="date" name="name" />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.occupation}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Occupation</span>
                </label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.email}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Email</span>
                </label>
                <input type="email" name="name" />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.required_info.address}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Address</span>
                </label>
                <input type="text" name="name" />
              </div>
            </form>
          </div>
        </details>








        <details className={styles.account_accordion}>
          <summary className={styles.account_accordion_summary}>
            <div className={styles.account_icon_container}>
              <Image
                src={ICONS.settings}
                width={15}
                height={15}
                alt=""
              />
            </div>
            <div className={styles.account_label_container}>
              <div>
                <span className={styles.account_label_text}>
                  Profile Customization
                  <button className={`${styles.btn} ${styles.icon_info_container}`}>i</button>
                </span>
                <p className={styles.account_desc}>Provide information for profile customization.</p>
              </div>
              <div className={styles.badge_container}>
                <span className={`${styles.badge_regular} ${styles.badge}`}>Incomplete</span>
              </div>
            </div>

            <div className={`${styles.close} ${styles.account_icon_status}`}>
              <Image
                src={ICONS.arrow_light}
                width={15}
                height={15}
                alt=""
                className={styles.light}
              />
              <Image
                src={ICONS.arrow_dark}
                width={15}
                height={15}
                alt=""
                className={styles.dark}
              />
            </div>
          </summary>
          <div className={styles.account_accordion_content}>
            <form>
              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.account}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Username</span>
                </label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.settings}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Language</span>
                </label>
                <input type="tel" name="name" />
              </div>
            </form>
          </div>
        </details>









        <details className={styles.account_accordion}>
          <summary className={styles.account_accordion_summary}>
            <div className={styles.account_icon_container}>
              <Image
                src={ICONS.optional}
                width={15}
                height={15}
                alt=""
              />
            </div>
            <div className={styles.account_label_container}>
              <div>
                <span className={styles.account_label_text}>
                  Optional Information
                  <button className={`${styles.btn} ${styles.icon_info_container}`}>i</button>
                </span>
                <p className={styles.account_desc}>Provide optional information.</p>
              </div>
              <div className={styles.badge_container}>
                <span className={`${styles.badge_regular} ${styles.badge}`}>Incomplete</span>
              </div>
            </div>

            <div className={`${styles.close} ${styles.account_icon_status}`}>
              <Image
                src={ICONS.arrow_light}
                width={15}
                height={15}
                alt=""
                className={styles.light}
              />
              <Image
                src={ICONS.arrow_dark}
                width={15}
                height={15}
                alt=""
                className={styles.dark}
              />
            </div>
          </summary>
          <div className={styles.account_accordion_content}>
            <form>
              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.optional}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Bio</span>
                </label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.optional_info.company}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Company</span>
                </label>
                <input type="text" name="name" />
              </div>


              <div className={styles.form_group}>
                <label>
                  <span>
                    <Image
                      src={ICONS.optional_info.website}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Website</span>
                </label>
                <input type="text" name="name" />
              </div>
            </form>
          </div>
        </details>













      </main>
      <footer className={styles.account_footer}>
        <button className={`${styles.btn} ${styles.btn_cancel}`}>Cancel</button>
        <button className={`${styles.btn} ${styles.btn_proceed}`}>Proceed</button>
      </footer>
    </div>
  )
}