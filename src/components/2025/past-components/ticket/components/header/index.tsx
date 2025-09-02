import Image from "next/image";
import styles from "./header.module.css";
import sharedStyles from "../../ticket.shared.module.css";

const ICONS = {
  link: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rMi1pY29uIGx1Y2lkZS1saW5rLTIiPjxwYXRoIGQ9Ik05IDE3SDdBNSA1IDAgMCAxIDcgN2gyIi8+PHBhdGggZD0iTTE1IDdoMmE1IDUgMCAxIDEgMCAxMGgtMiIvPjxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi8+PC9zdmc+",
  emoji: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXVnaC1pY29uIGx1Y2lkZS1sYXVnaCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTggMTNhNiA2IDAgMCAxLTYgNSA2IDYgMCAwIDEtNi01aDEyWiIvPjxsaW5lIHgxPSI5IiB4Mj0iOS4wMSIgeTE9IjkiIHkyPSI5Ii8+PGxpbmUgeDE9IjE1IiB4Mj0iMTUuMDEiIHkxPSI5IiB5Mj0iOSIvPjwvc3ZnPg==",
  attachment: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXBlcmNsaXAtaWNvbiBsdWNpZGUtcGFwZXJjbGlwIj48cGF0aCBkPSJNMTMuMjM0IDIwLjI1MiAyMSAxMi4zIi8+PHBhdGggZD0ibTE2IDYtOC40MTQgOC41ODZhMiAyIDAgMCAwIDAgMi44MjggMiAyIDAgMCAwIDIuODI4IDBsOC40MTQtOC41ODZhNCA0IDAgMCAwIDAtNS42NTYgNCA0IDAgMCAwLTUuNjU2IDBsLTguNDE1IDguNTg1YTYgNiAwIDEgMCA4LjQ4NiA4LjQ4NiIvPjwvc3ZnPg==",
  media: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbWFnZS1pY29uIGx1Y2lkZS1pbWFnZSI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iMiIvPjxwYXRoIGQ9Im0yMSAxNS0zLjA4Ni0zLjA4NmEyIDIgMCAwIDAtMi44MjggMEw2IDIxIi8+PC9zdmc+",
  edit: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wZW5jaWwtaWNvbiBsdWNpZGUtcGVuY2lsIj48cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIvPjxwYXRoIGQ9Im0xNSA1IDQgNCIvPjwvc3ZnPg==",
  more: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTcwNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lbGxpcHNpcy12ZXJ0aWNhbC1pY29uIGx1Y2lkZS1lbGxpcHNpcy12ZXJ0aWNhbCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTkiIHI9IjEiLz48L3N2Zz4=",
  delete: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjQ0M2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmFzaC1pY29uIGx1Y2lkZS10cmFzaCI+PHBhdGggZD0iTTMgNmgxOCIvPjxwYXRoIGQ9Ik0xOSA2djE0YzAgMS0xIDItMiAySDdjLTEgMC0yLTEtMi0yVjYiLz48cGF0aCBkPSJNOCA2VjRjMC0xIDEtMiAyLTJoNGMxIDAgMiAxIDIgMnYyIi8+PC9zdmc+",
  done: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByklEQVR4nO2WO07DQBCG3XCAZNe8QUg0FFBBiUSNBEk8I1+BgkC4AlegjEAUlJSEGVucgZ4gpLQIOkg6EgXtJrEixV6/gqBgpJEtedef55/H2rL+7a9Z4c5dtdk5FYS+JGgKgo7ywT36RYKTgl9emRqw2HCXJGFdMnQlY9/s0BMEt3NeeS0XVBBUBEE7Hjjhn8JzSpmgkuBMRZABGkQvPayljlTmgo5JnzTyIjvLGeWNlv2htBgfLcP1FKHaBcNlbMskq97UkneVkpFg1ae5IiN8k/futs3ubsizqkFm9PJACw1nU7+HcCfkOUWDCV6yQeF9ltwt/Q4fNgTD68Q6gqYJ3P4RKOt17UiwKv2wTTYBDqdYJ0peddU5NrSVZcjxcyiYK+uDD3P3RvCU0L5Z6ojiUrkftcMQ3koF5ZjiUkebIZcB3Ho8mkkD1fvZOY4Eq/PUNEDG4WmgkvDLOEC03IRXMVXcEoTnqpoTVz9h3QgNDv6I6s7kBB/ScxasJCYJ96czs6EnGA4TQQO4h7W8PwJq9ltZTHhOKZPsSl7CAyuPzbNrC4ILVZlJopSMN4lzmvzPBKuCgSXhk5q9erbreyTVp7Et82/WL9g3Q8yrxxyTcosAAAAASUVORK5CYII=",
}

export const TicketHeader = () => (
  <header className={styles.ticket_header}>
    <div className={`${styles.ticket_header_info}`}>
      <h1 className={styles.ticket_title}>Project Ticket</h1>
      <div className={styles.ticket_actions}>
        <button className={`${styles.btn} ${styles.btn_draft}`}>Draft</button>
        <button className={`${styles.btn} ${styles.btn_save}`}>Save Ticket</button>
      </div>
    </div>
    <div className={styles.ticket_header_actions}>
      <div className={`${styles.btn}`}>
        <Image
          src={ICONS.done}
          width={20}
          height={20}
          alt=""
        />
        In Progress
      </div>
      <div className={styles.header_actions_container}>
        <button className={`${styles.icon}`}>
          <Image
            src={ICONS.attachment}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon} ${styles.separator}`}>
          <Image
            src={ICONS.emoji}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon}`}>
          <Image
            src={ICONS.link}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon}`}>
          <Image
            src={ICONS.media}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon} ${styles.separator}`}>
          <Image
            src={ICONS.edit}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon}`}>
          <Image
            src={ICONS.more}
            width={15}
            height={15}
            alt=""
          />
        </button>
        <button className={`${styles.icon}`}>
          <Image
            src={ICONS.delete}
            width={15}
            height={15}
            alt=""
          />
        </button>
      </div>
    </div>
  </header>
)