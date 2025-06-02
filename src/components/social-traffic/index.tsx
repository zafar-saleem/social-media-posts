import Image from "next/image";
import styles from "./social-traffic.module.css";

export const SocialTraffic = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.visitors_stats_container} ${styles.flex}`}>
        <div className={`${styles.visitors_stats_content} ${styles.flex} ${styles.f_col} ${styles.f_justify_center}`}>
          <span className={`${styles.visitor_stats_title} ${styles.text_color_secondary}`}>Visitor Channels</span>
          <span className={styles.visitor_stats_percentage}>
            78% <span className={styles.badge}>-0.4%</span>
          </span>
        </div>

        <div className={styles.visitor_stats_action}>
          <button className={`${styles.visitor_stats_btn} ${styles.text_color_secondary}`}>Details</button>
        </div>
      </div>


      <div className={styles.visitor_stats_graphs}>
        <div className={`${styles.visitor_graphs} ${styles.flex} ${styles.f_row}`}>
          <div className={styles.visitor_stats_organic} />
          <div className={styles.visitor_stats_referral} />
          <div className={styles.visitor_stats_direct} />
        </div>
        <div className={`${styles.visitor_graphs_labels} ${styles.flex} ${styles.f_row}`}>
          <section className={styles.visitor_graphs_label_container}>
            <span className={styles.visitor_organic_icon} />
            <span className={`${styles.visitor_labels} ${styles.text_color_secondary}`}>Organic</span>
          </section>
          <section className={styles.visitor_graphs_label_container}>
            <span className={styles.visitor_referral_icon} />
            <span className={`${styles.visitor_labels} ${styles.text_color_secondary}`}>Referral</span>
          </section>
          <section className={styles.visitor_graphs_label_container}>
            <span className={styles.visitor_direct_icon} />
            <span className={`${styles.visitor_labels} ${styles.text_color_secondary}`}>Direct</span>
          </section>
        </div>
      </div>


      <div className={styles.social_states_table}>
        <div className={`${styles.flex} ${styles.social_table_header}`}>
          <span className={`${styles.text_color_supporting} ${styles.social_table_labels}`}>Channels</span>
          <span className={`${styles.text_color_supporting} ${styles.social_table_labels}`}>Percent</span>
          <span className={`${styles.text_color_supporting} ${styles.social_table_labels}`}>Total</span>
        </div>
        <div className={`${styles.flex} ${styles.social_table_body}`}>



          <div className={styles.social_table_column}>
            <div className={`${styles.flex} ${styles.social_table_column_label}`}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0NDZmZWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vay1pY29uIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4="
                width={15}
                height={15}
                alt=""
              />
              <span>Facebook</span>
            </div>
            <div className={`${styles.flex} ${styles.social_table_column_label}`}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlYjAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0taWNvbiBsdWNpZGUtaW5zdGFncmFtIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIvPjxwYXRoIGQ9Ik0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6Ii8+PGxpbmUgeDE9IjE3LjUiIHgyPSIxNy41MSIgeTE9IjYuNSIgeTI9IjYuNSIvPjwvc3ZnPg=="
                width={15}
                height={15}
                alt=""
              />
              <span>Instagram</span>
            </div>
            <div className={`${styles.flex} ${styles.social_table_column_label}`}>
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                width={15}
                height={15}
                alt=""
              />
              <span>Google</span>
            </div>
          </div>




          <div className={styles.social_table_column}>
            <div className={styles.social_table_column_per}>
              <span>28%</span>
            </div>
            <div className={styles.social_table_column_per}>
              <span>23%</span>
            </div>
            <div className={styles.social_table_column_per}>
              <span>32%</span>
            </div>
          </div>







          <div className={styles.social_table_column}>
            <div className={styles.social_table_column_total}>
              <span />
              <span>6,958</span>
            </div>

            <div className={styles.social_table_column_total}>
              <span />
              <span>7,952</span>
            </div>
            
            <div className={styles.social_table_column_total}>
              <span />
              <span>5,716</span>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.btn}>View reports</button>
    </div>
  )
}