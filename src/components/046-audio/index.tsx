import Image from "next/image";
import styles from "./audio.module.css";

import React from "react";

const PLAYER_ICONS = {
  play: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyOTI5MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbGF5LWljb24gbHVjaWRlLXBsYXkiPjxwb2x5Z29uIHBvaW50cz0iNiAzIDIwIDEyIDYgMjEgNiAzIi8+PC9zdmc+",
  pause: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyOTI5MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXVzZS1pY29uIGx1Y2lkZS1wYXVzZSI+PHJlY3QgeD0iMTQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvc3ZnPg==",
  next: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyOTI5MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1za2lwLWZvcndhcmQtaWNvbiBsdWNpZGUtc2tpcC1mb3J3YXJkIj48cG9seWdvbiBwb2ludHM9IjUgNCAxNSAxMiA1IDIwIDUgNCIvPjxsaW5lIHgxPSIxOSIgeDI9IjE5IiB5MT0iNSIgeTI9IjE5Ii8+PC9zdmc+",
  prev: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyOTI5MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1za2lwLWJhY2staWNvbiBsdWNpZGUtc2tpcC1iYWNrIj48cG9seWdvbiBwb2ludHM9IjE5IDIwIDkgMTIgMTkgNCAxOSAyMCIvPjxsaW5lIHgxPSI1IiB4Mj0iNSIgeTE9IjE5IiB5Mj0iNSIvPjwvc3ZnPg==",
}

export const AudioPlayer = () => {
  const audioRef = React.useRef(null);

  return (
    <div className={styles.audio_player_container}>
      <audio ref={audioRef} className={styles.audio_player}>
        <source src="https://marine-cafe.com/?wpdmdl=25803&play=Wellerman_Nathan_Evans.mp3" type="audio/mp3"></source>
      </audio>
      <div className={styles.audio_player_controls_container}>
        <button onClick={() => audioRef.current.previous()} className={styles.play_controls}>
          <Image
            className={`${styles.player_control_icons} ${styles.player_control_icon_prev}`}
            src={PLAYER_ICONS.prev}
            width={20}
            height={20}
            alt=""
          />
        </button>
        <button onClick={() => audioRef.current.play()} className={styles.play_controls}>
        <Image
          className={`${styles.player_control_icons} ${styles.player_control_icon_play}`}
          src={PLAYER_ICONS.play}
          width={20}
          height={20}
          alt=""
        />
        </button>
        <button onClick={() => audioRef.current.pause()} className={styles.play_controls}>
        <Image
          className={`${styles.player_control_icons} ${styles.player_control_icon_pause}`}
          src={PLAYER_ICONS.pause}
          width={20}
          height={20}
          alt=""
        />
        </button>
        <button onClick={() => audioRef.current.next()} className={styles.play_controls}>
        <Image
          className={`${styles.player_control_icons} ${styles.player_control_icon_next}`}
          src={PLAYER_ICONS.next}
          width={20}
          height={20}
          alt=""
        />
        </button>
      </div>
    </div>
  )
}

