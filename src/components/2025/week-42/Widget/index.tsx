"use client";

import React from "react";
import styles from "./Widget.module.css";

const People = [
  {
    avatar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>,
    role: "CEO",
    name: "Jone Krookes",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  },
  {
    avatar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog-icon lucide-user-cog"><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m14.305 16.53.923-.382"/><path d="m15.228 13.852-.923-.383"/><path d="m16.852 12.228-.383-.923"/><path d="m16.852 17.772-.383.924"/><path d="m19.148 12.228.383-.923"/><path d="m19.53 18.696-.382-.924"/><path d="m20.772 13.852.924-.383"/><path d="m20.772 16.148.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>,
    role: "PM",
    name: "Pherguson Lests",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  },
  {
    avatar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog-icon lucide-user-cog"><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m14.305 16.53.923-.382"/><path d="m15.228 13.852-.923-.383"/><path d="m16.852 12.228-.383-.923"/><path d="m16.852 17.772-.383.924"/><path d="m19.148 12.228.383-.923"/><path d="m19.53 18.696-.382-.924"/><path d="m20.772 13.852.924-.383"/><path d="m20.772 16.148.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>,
    role: "XYZ",
    name: "Zafar Saleem",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  },
  {
    avatar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog-icon lucide-user-cog"><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m14.305 16.53.923-.382"/><path d="m15.228 13.852-.923-.383"/><path d="m16.852 12.228-.383-.923"/><path d="m16.852 17.772-.383.924"/><path d="m19.148 12.228.383-.923"/><path d="m19.53 18.696-.382-.924"/><path d="m20.772 13.852.924-.383"/><path d="m20.772 16.148.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>,
    role: "ABC",
    name: "M Saleem Khan",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  },
]

const setYAxis = (index: number) => {
  if (index === 0) {
    return 0;
  }

  if (index === 1) {
    return -3;
  }

  return index * -3;
}

export const Widget = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Contents />
    </div>
  )
}

const Header = () => {
  const [isShowAll, setShowAll] = React.useState(false);

  return (  
    <header className={styles.header}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>        
      <span className={styles.header_label}>People</span>
      <span className={styles.header_counter}>{People.length}</span>
      <div className={styles.header_control}>
        <label className={styles.control_label}>
          <div className={styles.label_text}>
            {
              isShowAll ? <span>Show All</span> : <span>Hide</span>
            }
          </div>
          <input type="checkbox" className={styles.control_toggle} onChange={() => setShowAll(!isShowAll)} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </label>
      </div>
    </header>
  )
}

const scaleValues: any = {
  "0": 1.00,
  "1": 0.97,
  "2": 0.94,
  "3": 0.91,
  "4": 0.88,
  "5": 0.85,
  "6": 0.82,
  "7": 0.79,
  "8": 0.76,
  "9": 0.73,
  "10": 0.70,
}

const Contents = () => {
  return (
    <main className={styles.contents}>
      {
        People.map((people, index) => (
          <React.Fragment key={`${people.name}-${people.role}-${index}`}>
            <Card index={index} {...people} />
          </React.Fragment>
        ))
      }
      <ButtonAdd index={People.length - 1} />
    </main>
  )
}

type ButtonProps = {
  index: number;
}

const ButtonAdd = ({ index }: ButtonProps) => {
  return (
    <button
      className={styles.button_add}
      style={{
        "--zIndex": 1,
        "--positionY": `${setYAxis(index + 0.85)}rem`,
        "--scale": scaleValues[index + 1],
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    </button>
  )
}

type CardProps = ButtonProps & {
  name: string;
  role: string;
  icon: any;
  avatar: any;
}

const Card = ({ index, ...rest }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        "--zIndex": index === 0 ? 100 : 100 - index,
        "--positionY": `${setYAxis(index)}rem`,
        "--scale": scaleValues[index],
      }}
    >
      {rest.avatar}
      <span className={styles.card_name}>{rest.name}</span>
      <span className={styles.card_role}>{rest.role}</span>
      <button className={styles.button_email}>
        {rest.icon}
      </button>
    </div>
  )
}
