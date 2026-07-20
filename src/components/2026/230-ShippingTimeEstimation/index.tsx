import styles from "./styles.module.css";

const DATA = {
  title: "Estimated Delivery",
  date: "Mon 23",
  month: "March",
  package: {
    text: "Your package from Adidas",
    estimated_time: "10AM-11AM",
    current_time: {
      mins: 10,
      secs: 35,
    },
    current_distance: "2 Miles away",
  },
}

export const ShippingTimeEstimation = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>{DATA.title}</span>
        <div className={styles.date}>
          <span className={styles.day}>{DATA.date}</span>
          <span className={styles.month}>{DATA.month}</span>
        </div>
        <div
          className={styles.time_duration}
          style={{
            "--left": "58%",
          }}
        >
          <span className={styles.text}>{DATA.package.text}</span>
          <span className={styles.start_time}>10AM</span>
          <span className={styles.end_time}>11AM</span>
        </div>
      </div>
      {/* <span className={styles.tooltip}>{DATA.package.current_distance}</span> */}
    </>
  )
}