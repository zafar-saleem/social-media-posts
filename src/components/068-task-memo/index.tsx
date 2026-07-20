import styles from "./task.module.css";

export const TaskMemo = () => {
  return (
    <div className={styles.task_container}>
      <header className={styles.task_header}>
        <span className={styles.task_date}>Thu 22 May, 2025</span>
        <span className={styles.task_time}>16:55</span>
        <div className={styles.task_status_container}>
          <span className={styles.task_status}>Done</span>
        </div>
      </header>
      <main className={styles.task_content}>
        <article>
          <span className={styles.title}>Things to do Today</span>
          <ul>
            <li>
              <div>
                <input type="checkbox" name="task_one" id="task_one" />
              </div>
              <label htmlFor="task_one">Design a new shot.</label>
            </li>
            <li>
              <div>
                <input type="checkbox" name="task_one" id="task_two" />
              </div>
              <label htmlFor="task_two">Make a twitter post.</label>
            </li>
            <li>
              <div>
                <input type="checkbox" name="task_one" id="task_three" />
              </div>
              <label htmlFor="task_three">Finish UI update on the web.</label>
            </li>
            <li>
              <div>
                <input type="checkbox" name="task_one" id="task_four" />
              </div>
              <label htmlFor="task_four">Coffee break.</label>
            </li>
            <li>
              <div>
                <input type="checkbox" name="task_one" id="task_five" />
              </div>
              <label htmlFor="task_five">Meeting with stackholders.</label>
            </li>
          </ul>
        </article>
      </main>
      <footer className={styles.task_footer}>
        <button>Add/Edit Task</button>
      </footer>
    </div>
  )
}