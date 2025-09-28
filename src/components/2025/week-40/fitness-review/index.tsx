import Image from "next/image";
import styles from "./fitness.module.css";

const WeekSummary = {
  streak: {
    label: "Best Streak",
    value: "3",
    unit: "days",
  },
  trending_habit: {
    label: "Most Completed Habit",
    value: "30",
    fitness_type: {
      type: "Walk",
      meal: "after meals",
    },
    unit: "minutes",
  },
  week_day: [
    {
      completed: "35%",
      day_num: 11,
    },
    {
      completed: "67%",
      day_num: 12,
    },
    {
      completed: "100%",
      day_num: 13,
    },
    {
      completed: "100%",
      day_num: 14,
    },
    {
      completed: "100%",
      day_num: 15,
    },
    {
      completed: "35%",
      day_num: 16,
    },
    {
      completed: "70%",
      day_num: 17,
    },
  ]
}

export const FitnessWeekReview = () => {
  const { trending_habit } = WeekSummary;
  return (
    <div className={styles.container}>
      <h1>End of the week summary</h1>
      <div className={styles.contents}>
        <div className={styles.days_container}>
          {
            WeekSummary.week_day.map((item, index) => (
              <span className={styles.day}
                key={index}
                style={{
                  "--goal": item.completed,
                  "--color": item.completed === "100%" ? "rgb(76 197 103)" : "rgb(255 182 57)",
                }}
              >
                <span>{item.day_num}</span>
                {item.completed === "100%" && <svg width="28" height="28" viewBox="0 0 24 24" fill="rgb(75 197 108)" stroke="rgb(255 255 255)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>}
              </span>
            ))
          }
        </div>

        <div className={styles.meta_info}>
          <div className={styles.week_highlight}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgb(255 177 18)" stroke="rgb(255 177 18)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame">
              <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
            </svg>
            <div>
              <span className={styles.label}>{WeekSummary.streak.label}</span>
              <span className={styles.value}>{WeekSummary.streak.value} {WeekSummary.streak.unit}</span>
            </div>
          </div>
          <div className={styles.week_highlight}>
            <Image
              width={48} height={48}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2UlEQVR4nO2af4hUVRTHbz/V/i1Js1Ii/6kwEKKFqP8EK5IIBAtxSWjmnTO7wkbhf71WcvfcGRfyTwkREaIU/ScoMqMIMioQK0VcTW3cd87b1dKyX0Y6cWbX7e3b+9664e7cZ/uBYYZ5574537n3nvu9d8aYGf5nhKXoNguygYCPW5SL+kwo3X1d9TmmUCKQv7AojfSDgPcXRowF2eASMfoAed0UARoeTjlC+JgpAhblYp4QAvnTXA89Qsj9pggQSvcEQkJTBPq66nO0OrmF8OeFqVqKJqvVSSd2c84AH9OeKJSIGXygpzJwOyG/aVF+SMwJLcNfEcjTpgj0gjxDwFH+Ihg9a3ylioPzCGRProB/q9WXxkco4HaL8tPViWiaxV+1XcM0bgjDxo2tzt9sgoF7LMr7VysgYRSPaPsa8kICftmHufDzpEUM98hbw/fg1eq1qhAvad1qjXIma9gQMhHy5SwhKkDvo4JGbMp3YfvJ2dMuxKKsdXgmTXwHdZ6+2wbR43k9okOyeR+Qo4kvYNuV96cNi3IgldyBGsqjieuv5gyr4xrzRmlofsb+5KBF7ql2RI/tXNm4acpE6Aeke4JQHhwjFGRXjpCtGrOpFN1hkb/PLwocT9kCSsjvjE1MPhgfI/Wc+bFmVHB5aDEhD+YWBpSBay7CVs7cRch/jfmgSrwsGdNXri/ITawU3ZuM78HB+y3wa3pAQch/O4TUp36TBPytLmpjYoCfyxlWJybyaBbj57VoWGRWEVXk5ddeSMpDEciL48Uy5QjZZnzAgpxOJCWbO/tnjY/hTzKFBNxufIACfrIppimIn3LFWJCzmRO9LItMUSCUH7Mnu1u8l1jgd7NLKfeHKw/daopAL8T36fzJXuRkvfGdcGRv0dsx+DCBnMtYrS/oemR8hlC21AJ5qPk6iNvUCWf0zA7jM4RSV8sxKqYSL9P9hmOuXO5FfsL4yMZOnps0e7UyP6DvUxC/YIEvOSrYx8ZHqsjL0851VAxKx/hVXn7fUmrcYnyDHNYk6XQJ5Ov09R7gR4xPUBC3uX4H0d3ilRgLvDl9vQrSaXxh47r4Tt0zOOz34WQcVWSVw0S+bXwgDBs3Z5tE7krGqs+arK2fNgi4mmHX30vvU5rxjp7TE0rTSmwQr3Ad+RDIKd0gOdug7PbqHNiWhxZb5POO3vjDVqKlWe0I+BXHELTTm30CAt7ndrfRS2YSJzAjReEz0yoI+RdHQtsnaqeniekyrceuplUQ8kcp7/SN/lXjP/Um8F7TKmrICzUBi/Kblt/0EU8eWoYJ5dPhM2L5cDJtZzAF4x+q2P1HzpmhjwAAAABJRU5ErkJggg=="
              alt="walking"
            />
            <div>
              <span className={styles.label}>{trending_habit.label}</span>
              <span className={styles.value}>{trending_habit.fitness_type.type} for {trending_habit.value} {trending_habit.unit} {trending_habit.fitness_type.meal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}