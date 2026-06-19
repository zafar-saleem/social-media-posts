"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";

const CARD_DATA = {
  card_name: "Sarah Chen",
  card_activity: "Knitting",
  card_timespan: "2 hours ago",
  card_text: "Finally finished the back panel of the chunky cable knit sweater! The pattern was tricky but so worth it.  Now on to the sleeves...",
  card_avatar: "S",
  card_image: {
    src: "https://images.pexels.com/photos/5691897/pexels-photo-5691897.jpeg",
    alt: "",
    width: 2000,
    height: 2000,
  },
  card_likes: {
    value: 342,
    liked: false,
  },
  card_comments: 28,
  card_shares: 14,
  bookmark: false,
}

export const LiesureActivityCard = () => {
  const [card, setCard] = React.useState(CARD_DATA);

  console.log(card);

  return (
    <div className={styles.activity_card}>
      <svg
        width="224" height="224" viewBox="0 0 24 24"
        fill="rgb(255 0 94)" stroke="rgb(255 0 94)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={`lucide lucide-heart-icon lucide-heart ${styles.card_heart} ${card.card_likes.liked && styles.scale_heart}`}>
          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
        </svg>
      <div className={styles.card_header}>
        <p className={styles.card_avatar}>{card.card_avatar}</p>
        <div className={styles.card_info}>
          <span className={styles.card_name}>{card.card_name}</span>
          <span className={styles.card_badge}>{card.card_activity}</span>
          <span className={styles.card_timespan}>{card.card_timespan}</span>
        </div>
        <button className={styles.card_button}>
          <svg
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="rgb(166 166 166)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-ellipsis-icon lucide-ellipsis">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
      </div>






      <p className={styles.card_text}>{card.card_text}</p>








      <div className={styles.card_image}>
        <Image
          src={card.card_image.src}
          width={card.card_image.width}
          height={card.card_image.height}
          alt={card.card_image.alt}
          className={styles.card_media}
        />
      </div>



      <div className={styles.card_footer}>
        <Like {...card.card_likes} setCard={setCard} />
        <div className={styles.footer_comment}>
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(164 164 165)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-more-icon lucide-message-square-more"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/></svg>
          </button>
          <span>{card.card_comments}</span>
        </div>
        <div className={styles.footer_share}>
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(164 164 165)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
          </button>
          <span>{card.card_shares}</span>
        </div>
        <Bookmark bookmarked={card.bookmark} setCard={setCard} />
      </div>
    </div>
  )
}

const Like = ({ setCard, ...props }) => {
  const handleUserLike = () => {
    if (props.liked) {
      setCard(prev => ({...prev, card_likes: { value: props.value--, liked: !props.liked }}));
      return;
    }

    setCard(prev => ({...prev, card_likes: { value: props.value++, liked: !props.liked }}));
  }

  if (props.liked) {
    return (
      <div className={styles.footer_like}>
        <button
          onClick={handleUserLike}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 0 94)" stroke="rgb(255 0 94)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
        </button>
        <span>{props.value}</span>
      </div>
    )
  }

  return (
    <div className={styles.footer_like}>
      <button
        onClick={handleUserLike}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(164 164 165)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
      </button>
      <span>{props.value}</span>
    </div>
  )
}

const Bookmark = ({ setCard, ...props }) => {
  const handleUserBookmark = () => {
    setCard(prev => ({...prev, bookmark: !prev.bookmark}));
  }

  if (props.bookmarked) {
    return (
      <button
        className={styles.footer_bookmark}
        onClick={handleUserBookmark}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(164 164 165)" stroke="rgb(164 164 165)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
      </button>
    )
  }
  return (
    <button
      className={styles.footer_bookmark}
      onClick={handleUserBookmark}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(164 164 165)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
    </button>
  )
}
