import styles from "./styles.module.css";

export const Reviewers = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.user_one_dp} ${styles.dp_container}`}>
        <button
          className={`${styles.user_one} ${styles.button} ${styles.hover}`}
          popoverTarget="popover_target"
        />
        <p popover="auto" id="popover_target" className={`${styles.popover_target} ${styles.popover}`}>
          <span>Isamel</span>
          <span>@themar</span>
        </p>
      </div>
      <div className={`${styles.user_two_dp} ${styles.dp_container}`}>
        <button
          className={`${styles.user_two} ${styles.button} ${styles.hover}`}
          popoverTarget="popover_target_user_two"
        />
        <p popover="auto" id="popover_target_user_two" className={`${styles.popover_target} ${styles.popover}`}>
          <span>Seb</span>
          <span>@interceptor</span>
        </p>
      </div>
      <div className={`${styles.user_three_dp} ${styles.dp_container}`}>
        <button
          className={`${styles.user_three} ${styles.button} ${styles.hover}`}
          popoverTarget="popover_target_user_three"
        />
        <p popover="auto" id="popover_target_user_three" className={`${styles.popover_target} ${styles.popover}`}>
          <span>Safar</span>
          <span>@dulgeom</span>
        </p>
      </div>
      <div className={`${styles.user_four_dp} ${styles.dp_container}`}>
        <button
          className={`${styles.user_four} ${styles.button} ${styles.hover}`}
          popoverTarget="popover_target_user_four"
        />
        <p popover="auto" id="popover_target_user_four" className={`${styles.popover_target} ${styles.popover}`}>
          <span>Aly</span>
          <span>@allin</span>
        </p>
      </div>
      <div className={`${styles.user_five_dp} ${styles.dp_container}`}>
        <button
          className={`${styles.user_five} ${styles.button} ${styles.hover}`}
          popoverTarget="popover_target_user_five"
        />
        <p popover="auto" id="popover_target_user_five" className={`${styles.popover_target} ${styles.popover}`}>
          <span>Theris</span>
          <span>@deris</span>
        </p>
      </div>
    </div>
  )
}