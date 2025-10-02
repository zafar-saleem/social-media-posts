import Link from "next/link";
import styles from "./assignment.module.css";
import Image from "next/image";

const user_details = {
  user: {
    avatar: {
      url: "https://images.stockcake.com/public/7/6/8/768018d2-4ef0-400b-a2ff-4a0484b6efec_large/friendly-geometric-character-stockcake.jpg",
      width: 50,
      height: 50,
      alt: "Zafar",
    },
    name: "Zafar Saleem",
    contact: "zafar@email.com",
    status: {
      value: "Active",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(105 183 98)" stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    },
    timestamp: "Next: Jun 25, 2025",
  },
  tags: [
    {
      label: "Membership Program",
      style: "tag_member",
    },
    {
      label: "Other Tag",
      style: "tag_other",
    },
  ],
  personal_info: {
    age: {
      label: "Age",
      value: "58 y/o",
    },
    sex: {
      label: "Sex",
      value: "Male",
    },
    location: {
      label: "Location",
      value: "Lisboa",
    },
    device: {
      label: "Active Device",
      value: "Control",
    },
    status: {
      label: "Status",
      value: "Confimed",
    }
  },
  chat: {
    notification_counter: 3,
  }
}

export const Assigned = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={user_details.user.avatar.url}
          width={user_details.user.avatar.width}
          height={user_details.user.avatar.height}
          alt={user_details.user.avatar.alt}
          className={styles.avatar}
        />
        <div className={styles.user_details}>
          <span className={styles.name}>{user_details.user.name}</span>
          <span className={styles.contact}>{user_details.user.contact}</span>
        </div>
        <div className={styles.meta}>
          <div className={styles.status_container}>
            <span className={`${styles.badge} ${styles.status}`}>
              {user_details.user.status.icon}
              <span className={styles.text}>{user_details.user.status.value}</span>
            </span>
            <span className={styles.timestamp}>{user_details.user.timestamp}</span>
          </div>
          <button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 109 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
      </header>
      <Tags tags={user_details.tags} />
      <PersonalInfoTable personal_info={user_details.personal_info} />
      <footer className={styles.footer}>
        <Link href="#">Quick Actions</Link>
        <div className={styles.controls}>
          <button>
            <span className={styles.icon} />
            <span className={styles.text}>Appointments</span>
          </button>
          <button>
            <span className={styles.icon} />
            <span className={styles.text}>Chat</span>
            <span className={styles.notifications}>{user_details.chat.notification_counter}</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

const Tags = ({ ...props }) => {
  return (
    <div className={styles.tags}>
      {
        props.tags.map((tag: {label: string; style: string }, index: number) => (
          <span key={index} className={`${styles.badge} ${styles[tag.style]}`}>{tag.label}</span>
        ))
      }
    </div>
  )
}

const PersonalInfoTable = ({ ...props }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table_head}>
        <tr className={styles.head_row}>
          <th>{props.personal_info.age.label}</th>
          <th>{props.personal_info.sex.label}</th>
          <th>{props.personal_info.location.label}</th>
          <th>{props.personal_info.device.label}</th>
          <th>{props.personal_info.status.label}</th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        <tr className={styles.body_row}>
          <td>{props.personal_info.age.value}</td>
          <td>{props.personal_info.sex.value}</td>
          <td>{props.personal_info.location.value}</td>
          <td>{props.personal_info.device.value}</td>
          <td>{props.personal_info.status.value}</td>
        </tr>
      </tbody>
    </table>
  )
}
