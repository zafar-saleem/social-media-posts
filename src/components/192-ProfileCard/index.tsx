"use client";

import React, { Activity } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const initialValues = {
  name: "MarQus Meronson",
  profession: "Senior Developer",
  status: {
    text: "available",
    color: "2 203 84",
    icon: <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(33 112 80)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-lightbulb-icon lucide-lightbulb">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
    </svg>,
  },
  avatar: {
    image_src: "",
    initials: "M",
  }
}

export const ProfileCard = () => {
  const [profile, setProfile] = React.useState(initialValues);

  return (
    <>
      <section className={styles.card} style={{ "--bg-color": profile.status.color }}>
        <div className={styles.card_image} data-parent-status={profile.status}>
          <Activity mode={profile.avatar.image_src ? "visible" : "hidden"}>
            <ProfileImage src={profile.avatar.image_src} />
          </Activity>
          
          <Activity mode={!profile.avatar.image_src ? "visible" : "hidden"}>
            <ProfileInitials initials={profile.avatar.initials} status={profile.status} />
          </Activity>
        </div>
        <div className={styles.card_info}>
          <span className={styles.card_name}>{profile.name}</span>
          <span className={styles.card_profession}>{profile.profession}</span>
          <span
            className={styles.card_status}
            style={{
              "--status-color": profile.status.color
            }}
          >
            {profile.status.icon}
            <span>{profile.status.text}</span>
          </span>
        </div>
        <button className={styles.card_button}>Message</button>
      </section>
      <Controls profile={profile} setProfile={setProfile} />
    </>
  )
}

type ProfileImageProps = {
  src: string;
}

export const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <Image
      src={src || "https://images.pexels.com/photos/30243616/pexels-photo-30243616.jpeg"}
      width={50}
      height={50}
      alt=""
      className={`${styles.status} ${styles.card_photo}`}
    />
  )
}

type ProfileInitialsProps = {
  initials: string;
  status: {
    color: string;
    text: string;
    icon: React.ReactNode | any;
  }
}

export const ProfileInitials = ({ initials, status }: ProfileInitialsProps) => {
  return (
    <span
      className={`${styles.status} ${styles.card_initials}`}
      style={{ "--status-indicator-color": status.color }}
    >
      {initials}
    </span>
  )
}

export const Controls = ({ profile , setProfile }) => {
  return (
    <div className={styles.controls}>
        <button
          onClick={() => {
            setProfile(() => {
              return {
                ...profile,
                status: {
                  text: "available",
                  color: "7 202 79",
                  icon: <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(33 112 80)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb-icon lucide-lightbulb">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                      <path d="M9 18h6"/>
                      <path d="M10 22h4"/>
                  </svg>,
                }
              }
            });
          }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(33 112 80)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lightbulb-icon lucide-lightbulb">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
        </svg>
      </button>
      <button
        onClick={() => {
          setProfile(() => {
            return {
              ...profile,
              status: {
                text: "In Meeting",
                color: "210 0 33",
                icon: <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(74 19 31)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-video-icon lucide-video">
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
                    <rect x="2" y="6" width="14" height="12" rx="2"/>
                </svg>
              }
            }
          });
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(74 19 31)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-video-icon lucide-video">
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
            <rect x="2" y="6" width="14" height="12" rx="2"/>
        </svg>
      </button>
      <button
        onClick={() => {
          setProfile(() => {
            return {
              ...profile,
              status: {
                text: "Away",
                color: "228 149 7",
                icon: <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(109 70 21)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-coffee-icon lucide-coffee">
                    <path d="M10 2v2"/>
                    <path d="M14 2v2"/>
                    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
                    <path d="M6 2v2"/>
                </svg>
              }
            }
          });
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(109 70 21)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-coffee-icon lucide-coffee">
            <path d="M10 2v2"/>
            <path d="M14 2v2"/>
            <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
            <path d="M6 2v2"/>
        </svg>
      </button>
      </div>
  )
}