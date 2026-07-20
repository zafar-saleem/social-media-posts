import styles from "./styles.module.css";

export const data = [
  {
    title: "Core Flow",
    instructor: "Maya",
    duration: "15 min",
    equipment: "Mat",
    level: "Beginner",
    timestamp: "Today, 12:30",
    saved: true,
    border: "rgb(207 239 215)",
    background: "rgb(231 248 235)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(41 203 79)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>,
  },
  {
    title: "Tempo Run",
    instructor: "Leo",
    duration: "20 min",
    equipment: "Treadmill",
    level: "Advance",
    timestamp: "Today, 08:15",
    saved: false,
    border: "rgb(247 201 211)",
    background: "rgb(251 228 233)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 49 84)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>,
  },
  {
    title: "Power Sculpt",
    instructor: "Jack",
    duration: "30 min",
    equipment: "Weights",
    level: "Beginner",
    timestamp: "Today, 07:30",
    saved: false,
    border: "rgb(197 221 250)",
    background: "rgb(226 238 252)",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(14 121 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell-icon lucide-dumbbell"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>,
  },
];

export const FitnessList = () => {
  return (
    <ul className={styles.fitness_list}>
      {
        data.map((item, index) => (
          <li
            key={index}
            className={styles.fitness_item}
            style={{
              "--border": item.border,
              "--background": item.background,
            }}
          >
            <div className={styles.exercise}>
              <span className={styles.exercise_icon}>
                {item.icon}
              </span>
              <div className={styles.fitness_details}>
                <span className={styles.fitness_title}>{item.title}</span>
                <ul className={styles.misc}>
                  <li>{item.instructor}</li>
                  <li>{item.duration}</li>
                  <li>{item.equipment}</li>
                </ul>
              </div>
              <span className={styles.fitness_level}>{item.level}</span>
            </div>
            <div className={styles.controls}>
              <div className={styles.timestamp}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(130 138 158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock8-icon lucide-clock-8"><path d="M12 6v6l-4 2"/><circle cx="12" cy="12" r="10"/></svg>
                <span className={styles.timestamp_text}>{item.timestamp}</span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button_bookmark}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(130 138 158)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-icon lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                </button>
                <button className={styles.button_start}>Start</button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}