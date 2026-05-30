import Link from "next/link";
import styles from "./styles.module.css";

const MEMBERS = [
  {
    id: 1,
    name: "Olivia Bennett",
    email: "olivia@company.com",
    company: "",
    initials: "O",
    color: "gold",
  },
  {
    id: 2,
    name: "Ethan Clarke",
    email: "ethan@company.com",
    company: "",
    initials: "E",
    color: "lime",
  },
  {
    id: 3,
    name: "Mia Rodriguez",
    email: "mia@company.com",
    company: "",
    initials: "M",
    color: "lightgrey",
  },
  {
    id: 4,
    name: "Noah Patel",
    email: "noah@company.com",
    company: "",
    initials: "N",
    color: "skyblue",
  },
  {
    id: 5,
    name: "Sophia Kim",
    email: "sophia@company.com",
    company: "",
    initials: "S",
    color: "pink",
  },
]

export const AddNewMember = () => {
  return (
    <form className={styles.member}>
      <h1 className={styles.member_title}>Add team members to your company</h1>
      <p className={styles.member_text}>
        We found these 5 users registered with you organization's email.
      </p>
      <div className={styles.member_search}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(113 113 115)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input type="search" className={styles.search_input} placeholder="Search people..." />
      </div>
      <ul className={styles.member_list}>
        {
          MEMBERS.map(member => (
            <li
              className={styles.list_item} key={member.id}
            >
              <span
                className={styles.item_avatar}
                style={{ "--color": member.color }}
              >
                {member.initials}
              </span>
              <Link href={`#`} className={styles.item_info}>
                <span className={styles.item_name}>{member.name}</span>
                <span className={styles.item_email}>{member.email}</span>
              </Link>
              <select className={styles.item_teams}>
                <option>Select Role</option>
                <option>UX Designer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Recruitment</option>
              </select>
            </li>
          ))
        }
      </ul>
      <button className={styles.button_continue}>Continue</button>
    </form>
  )
}