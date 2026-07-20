import styles from "../../styles.module.css";
import { TTask } from "../GoalsTracker";

type Props = {
  tasks: TTask[];
  meeting: number;
  setTasks: (args: any) => void;
  setMeetings: (args: number) => void;
}

export const GoalsList = ({ tasks, meeting, setTasks, setMeetings }: Props) => {
  return (
    <div className={styles.controls}>
      <div>
        <label className={styles.tasks_label}>
          <input
            type="radio" name="tab" className={styles.tab_task}
            defaultChecked
          />
          <span>Tasks</span>
        </label>
        <label className={styles.meetings_label}>
          <input type="radio" name="tab" className={styles.tab_meetings} />
          <span>Meetings</span>
        </label>
      </div>
      <ul className={styles.tasks_container}>
        {
          tasks.map((item, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={item.done ? true : false}
                  onChange={() => {
                    tasks.filter((task) => {
                      if (task.id === item.id) {
                        task.done = !task.done;
                      }
                      
                      setTasks(() => [...tasks]);
                    })
                  }}
                />
                <span>{item.text}</span>
              </label>
            </li>
          ))
        }
      </ul>
      <div className={styles.meetings_container}>
        <h4>Attended a meeting? Update here.</h4>
        <input type="range" min="0" max="10"
        defaultValue={meeting}
          onChange={(event) => {
            setMeetings(event.target.valueAsNumber);
          }}
          />
      </div>
    </div>
  )
}
