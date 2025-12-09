import styles from "./styles.module.css";
import { data } from "./data";

export const ProjectCard = () => {
  return (
    <section className={styles.card}>
      <Header />
      <div className={styles.separator} />
      <MiscInfo />
      <div className={styles.separator} />
      <Milestones />
    </section>
  )
}

const getStartingPoint = (milestone) => {
  if (milestone.id === 1) return 0;

  if (milestone.id === 2) {
    return data
      .total_milestones
      .filter(item => item.id === 1)[0]
      .duration;
  }

  if (milestone.id === 3) {
    return data
      .total_milestones
      .filter(item => item.id === 1)[0]
      .duration
      +
      data
        .total_milestones
        .filter(item => item.id === 2)[0]
        .duration;
  }
}

const getEndPoint = (milestone) => {
  if (milestone.id === 1) {
    return milestone.duration;
  }

  if (milestone.id === 2) {
    return data
      .total_milestones
      .filter(item => item.id === 1)[0]
      .duration + milestone.duration;
  }

  if (milestone.id === 3) {
    return data
      .total_milestones
      .reduce((acc, item) => {
        return acc + item.duration;
      }, 0);
  }
}

export const Milestones = () => {
  return (
    <section className={styles.milestones}>
      <span className={styles.title}>Milestones</span>
      {
        data.total_milestones.map((milestone, index) => (
          <div
            key={index}
            className={`${styles.milestone_duration} ${styles.duration}`}
            style={{
              "--color": milestone.color,
              "--start-date": `${getStartingPoint(milestone)}%`,
              "--width": `${milestone.duration}%`,
            }}
          >
            <span
              className={`${styles.small_text} ${styles.badge} ${styles.label}`}
              style={{
                "--end-date": `${getEndPoint(milestone) - 7.5}%`
              }}
            >
              {milestone.end_date.split(",")[0]}
            </span>
          </div>
        ))
      }
    </section>
  )
}

export const MiscInfo = () => {
  return (
    <section className={styles.misc_info}>
      <div className={styles.assignees}>
        <span className={styles.title}>Assigned Roles</span>
        <div className={styles.roles}>
          {
            data.milestones.map((milestone, index) => (
              <p key={index} className={styles.role}>
                <span className={`${styles.small_text} ${styles.avatar}`} style={{ "--color": milestone.assignee.color }}>{milestone.assignee.avatar}</span>
                {milestone.tasks.map((label, labelIndex) => (
                  <span key={labelIndex} className={`${styles.small_text} ${styles.label}`} style={{ "--color": label.color }}>{label.text}</span>
                ))}
              </p>
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.client_details}>
        <span className={styles.title}>{data.title}</span>
        <span className={`${styles.small_text} ${styles.support_color} ${styles.client_name}`}>For {data.client}</span>
      </div>
      <div className={styles.header_info}>
        <span className={`${styles.small_text} ${styles.support_color} ${styles.badge}`}>{data.members} members</span>
        <span className={`${styles.small_text} ${styles.support_color} ${styles.badge}`}>{data.progress} Done</span>
      </div>
    </section>
  )
}
