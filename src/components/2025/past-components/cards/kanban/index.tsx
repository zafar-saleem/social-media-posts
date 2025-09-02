import Link from "next/link";
import styles from "./kanban.module.css";
import Image from "next/image";

const ICONS = {
  progress: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMzcgMTk3IDMzKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsb2NrNi1pY29uIGx1Y2lkZS1jbG9jay02Ij48cGF0aCBkPSJNMTIgMTYuNVY2Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=",
  more: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDUgMTA0IDEwNikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lbGxpcHNpcy1pY29uIGx1Y2lkZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiLz48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiLz48L3N2Zz4=",
  add: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDUgMTA0IDEwNikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbHVzLWljb24gbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=",
  done: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNzEgMTcxIDE3MykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2stYmlnLWljb24gbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==",
  signals: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig1NiAxNTkgMjM2KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNpZ25hbC1tZWRpdW0taWNvbiBsdWNpZGUtc2lnbmFsLW1lZGl1bSI+PHBhdGggZD0iTTIgMjBoLjAxIi8+PHBhdGggZD0iTTcgMjB2LTQiLz48cGF0aCBkPSJNMTIgMjB2LTgiLz48L3N2Zz4=",
  spotify: "data:image/png;base64,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",
  comments: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNTQgMTU0IDE1NikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLWNpcmNsZS1pY29uIGx1Y2lkZS1tZXNzYWdlLWNpcmNsZSI+PHBhdGggZD0iTTcuOSAyMEE5IDkgMCAxIDAgNCAxNi4xTDIgMjJaIi8+PC9zdmc+",
  attachment: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNTUgMTU1IDE1NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXBlcmNsaXAtaWNvbiBsdWNpZGUtcGFwZXJjbGlwIj48cGF0aCBkPSJNMTMuMjM0IDIwLjI1MiAyMSAxMi4zIi8+PHBhdGggZD0ibTE2IDYtOC40MTQgOC41ODZhMiAyIDAgMCAwIDAgMi44MjggMiAyIDAgMCAwIDIuODI4IDBsOC40MTQtOC41ODZhNCA0IDAgMCAwIDAtNS42NTYgNCA0IDAgMCAwLTUuNjU2IDBsLTguNDE1IDguNTg1YTYgNiAwIDEgMCA4LjQ4NiA4LjQ4NiIvPjwvc3ZnPg==",
  user: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3MWIwZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZC1pY29uIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZCI+PHBhdGggZD0iTTE4IDIwYTYgNiAwIDAgMC0xMiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+",
};

export const Kanban = () => {
  return (
    <div className={styles.kanban_cards_container}>
      <header className={styles.kanban_card_header}>
        <Image
          src={ICONS.progress}
          width={20}
          height={20}
          alt=""
        />
        <h3 className={styles.kanban_card_title}>In Progress</h3>
        <div className={styles.kanban_card_actions}>
          <button className={`${styles.kanban_card_btn_more} ${styles.kanban_card_btn}`}>
            <Image
              src={ICONS.more}
              width={20}
              height={20}
              alt=""
            />
          </button>
          <button className={`${styles.kanban_card_btn_add} ${styles.kanban_card_btn}`}>
            <Image
              src={ICONS.add}
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
      </header>
      <main>
        <div className={styles.ticket}>
          <div className={styles.ticket_header}>
            <Image
              src={ICONS.progress}
              width={20}
              height={20}
              alt=""
              className={styles.ticket_header_icon}
            />
            <span className={styles.ticket_header_number}>#183</span>
            <span className={styles.ticket_user_container}>
              <Image
                src={ICONS.user}
                width={20}
                height={20}
                alt=""
              />
            </span>
          </div>
          <article className={styles.ticket_details}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, in.</p>
          </article>
          <div className={styles.ticket_subtask_details}>
            <Image
              src={ICONS.done}
              width={20}
              height={20}
              alt=""
            />
            <span className={styles.ticket_subtask_done}>3/4</span>
            <span className={styles.ticket_subtask_progress} />
          </div>
          <div className={styles.ticket_social}>
            <button className={styles.ticket_social_btn}>
            <Image
              src={ICONS.signals}
              width={20}
              height={20}
              alt=""
            />
            </button>
            <button className={styles.ticket_social_btn}>
              <Image
                src={ICONS.spotify}
                width={20}
                height={20}
                alt=""
              />
              <span>Spotify</span>
            </button>
          </div>
          <div className={styles.ticket_info_container}>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.comments}
                width={20}
                height={20}
                alt=""
              />
              <span>2</span>
            </Link>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.attachment}
                width={20}
                height={20}
                alt=""
              />
              <span>1</span>
            </Link>
            <span className={styles.ticket_date}>May 10</span>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticket_header}>
            <Image
              src={ICONS.progress}
              width={20}
              height={20}
              alt=""
              className={styles.ticket_header_icon}
            />
            <span className={styles.ticket_header_number}>#112</span>
            <span className={styles.ticket_user_container}>
              <Image
                src={ICONS.user}
                width={20}
                height={20}
                alt=""
              />
            </span>
          </div>
          <article className={styles.ticket_details}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, in.</p>
          </article>
          <div className={styles.ticket_subtask_details}>
            <Image
              src={ICONS.done}
              width={20}
              height={20}
              alt=""
            />
            <span className={styles.ticket_subtask_done}>3/4</span>
            <span className={styles.ticket_subtask_progress} />
          </div>
          <div className={styles.ticket_social}>
            <button className={styles.ticket_social_btn}>
            <Image
              src={ICONS.signals}
              width={20}
              height={20}
              alt=""
            />
            </button>
            <button className={styles.ticket_social_btn}>
              <Image
                src={ICONS.spotify}
                width={20}
                height={20}
                alt=""
              />
              <span>Spotify</span>
            </button>
          </div>
          <div className={styles.ticket_info_container}>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.comments}
                width={20}
                height={20}
                alt=""
              />
              <span>2</span>
            </Link>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.attachment}
                width={20}
                height={20}
                alt=""
              />
              <span>1</span>
            </Link>
            <span className={styles.ticket_date}>May 12</span>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticket_header}>
            <Image
              src={ICONS.progress}
              width={20}
              height={20}
              alt=""
              className={styles.ticket_header_icon}
            />
            <span className={styles.ticket_header_number}>#123</span>
            <span className={styles.ticket_user_container}>
              <Image
                src={ICONS.user}
                width={20}
                height={20}
                alt=""
              />
            </span>
          </div>
          <article className={styles.ticket_details}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, in.</p>
          </article>
          <div className={styles.ticket_subtask_details}>
            <Image
              src={ICONS.done}
              width={20}
              height={20}
              alt=""
            />
            <span className={styles.ticket_subtask_done}>3/4</span>
            <span className={styles.ticket_subtask_progress} />
          </div>
          <div className={styles.ticket_social}>
            <button className={styles.ticket_social_btn}>
            <Image
              src={ICONS.signals}
              width={20}
              height={20}
              alt=""
            />
            </button>
            <button className={styles.ticket_social_btn}>
              <Image
                src={ICONS.spotify}
                width={20}
                height={20}
                alt=""
              />
              <span>Spotify</span>
            </button>
          </div>
          <div className={styles.ticket_info_container}>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.comments}
                width={20}
                height={20}
                alt=""
              />
              <span>2</span>
            </Link>
            <Link href="" className={styles.ticket_info}>
              <Image
                src={ICONS.attachment}
                width={20}
                height={20}
                alt=""
              />
              <span>1</span>
            </Link>
            <span className={styles.ticket_date}>May 1</span>
          </div>
        </div>
      </main>
    </div>
  )
}