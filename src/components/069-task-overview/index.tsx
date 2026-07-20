import Image from "next/image";
import styles from "./overview.module.css";
import Link from "next/link";

const ICONS = {
  status: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGFydC1waWUtaWNvbiBsdWNpZGUtY2hhcnQtcGllIj48cGF0aCBkPSJNMjEgMTJjLjU1MiAwIDEuMDA1LS40NDkuOTUtLjk5OGExMCAxMCAwIDAgMC04Ljk1My04Ljk1MWMtLjU1LS4wNTUtLjk5OC4zOTgtLjk5OC45NXY4YTEgMSAwIDAgMCAxIDF6Ii8+PHBhdGggZD0iTTIxLjIxIDE1Ljg5QTEwIDEwIDAgMSAxIDggMi44MyIvPjwvc3ZnPg==",
  assignee: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLWljb24gbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
  date: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1pY29uIGx1Y2lkZS1jYWxlbmRhciI+PHBhdGggZD0iTTggMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjwvc3ZnPg==",
  tags: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YWdzLWljb24gbHVjaWRlLXRhZ3MiPjxwYXRoIGQ9Im0xNSA1IDYuMyA2LjNhMi40IDIuNCAwIDAgMSAwIDMuNEwxNyAxOSIvPjxwYXRoIGQ9Ik05LjU4NiA1LjU4NkEyIDIgMCAwIDAgOC4xNzIgNUgzYTEgMSAwIDAgMC0xIDF2NS4xNzJhMiAyIDAgMCAwIC41ODYgMS40MTRMOC4yOSAxOC4yOWEyLjQyNiAyLjQyNiAwIDAgMCAzLjQyIDBsMy41OC0zLjU4YTIuNDI2IDIuNDI2IDAgMCAwIDAtMy40MnoiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSI5LjUiIHI9Ii41IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=",
  desc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ub3RlcGFkLXRleHQtaWNvbiBsdWNpZGUtbm90ZXBhZC10ZXh0Ij48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTIgMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxOCIgeD0iNCIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNOCAxMGg2Ii8+PHBhdGggZD0iTTggMTRoOCIvPjxwYXRoIGQ9Ik04IDE4aDUiLz48L3N2Zz4=",
  attachment: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMDggMTA4IDEwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXBlcmNsaXAtaWNvbiBsdWNpZGUtcGFwZXJjbGlwIj48cGF0aCBkPSJtMTYgNi04LjQxNCA4LjU4NmEyIDIgMCAwIDAgMi44MjkgMi44MjlsOC40MTQtOC41ODZhNCA0IDAgMSAwLTUuNjU3LTUuNjU3bC04LjM3OSA4LjU1MWE2IDYgMCAxIDAgOC40ODUgOC40ODVsOC4zNzktOC41NTEiLz48L3N2Zz4=",
  design: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzEgNTMgNjQpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY29tcG9uZW50LWljb24gbHVjaWRlLWNvbXBvbmVudCI+PHBhdGggZD0iTTE1LjUzNiAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzYgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAweiIvPjxwYXRoIGQ9Ik0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6Ii8+PHBhdGggZD0iTTguOTE2IDE3LjkxMmExIDEgMCAwIDAgMCAxLjQxNWwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNWwtMi4zNzctMi4zNzZhMSAxIDAgMCAwLTEuNDE0IDB6Ii8+PHBhdGggZD0iTTguOTE2IDQuNjc0YTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHoiLz48L3N2Zz4=",
  client: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig0OCAxMzQgNTMpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYWlycGxheS1pY29uIGx1Y2lkZS1haXJwbGF5Ij48cGF0aCBkPSJNNSAxN0g0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtMSIvPjxwYXRoIGQ9Im0xMiAxNSA1IDZIN1oiLz48L3N2Zz4=",
  download: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMjEgOTcgMTYzKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvd25sb2FkLWljb24gbHVjaWRlLWRvd25sb2FkIj48cGF0aCBkPSJNMTIgMTVWMyIvPjxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00Ii8+PHBhdGggZD0ibTcgMTAgNSA1IDUtNSIvPjwvc3ZnPg==",
  fullscreen: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTItaWNvbiBsdWNpZGUtbWF4aW1pemUtMiI+PHBhdGggZD0iTTE1IDNoNnY2Ii8+PHBhdGggZD0ibTIxIDMtNyA3Ii8+PHBhdGggZD0ibTMgMjEgNy03Ii8+PHBhdGggZD0iTTkgMjFIM3YtNiIvPjwvc3ZnPg==",
  share: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGFyZS1pY29uIGx1Y2lkZS1zaGFyZSI+PHBhdGggZD0iTTEyIDJ2MTMiLz48cGF0aCBkPSJtMTYgNi00LTQtNCA0Ii8+PHBhdGggZD0iTTQgMTJ2OGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTgiLz48L3N2Zz4=",
  edit: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wZW5jaWwtaWNvbiBsdWNpZGUtcGVuY2lsIj48cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIvPjxwYXRoIGQ9Im0xNSA1IDQgNCIvPjwvc3ZnPg==",
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  add: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbHVzLWljb24gbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=",
  list: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig5NyA5NyA5NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saXN0LWljb24gbHVjaWRlLWxpc3QiPjxwYXRoIGQ9Ik0zIDEyaC4wMSIvPjxwYXRoIGQ9Ik0zIDE4aC4wMSIvPjxwYXRoIGQ9Ik0zIDZoLjAxIi8+PHBhdGggZD0iTTggMTJoMTMiLz48cGF0aCBkPSJNOCAxOGgxMyIvPjxwYXRoIGQ9Ik04IDZoMTMiLz48L3N2Zz4=",
}

export const TaskOverview = () => {
  return (
    <div className={styles.container}>
      <header className={styles.task_header}>
        <button className={`${styles.btn_fullscreen} ${styles.btn}`}>
          <Image
            src={ICONS.fullscreen}
            width={15}
            height={13}
            alt=""
          />
        </button>
        <span className={styles.header_breadcrumb}>
          <Link href="#" className={styles.breadcrumb_back}>Client Projects</Link><span className={styles.breadcrumb_current}> / Website Redesign for Client X</span>
        </span>
        <div className={styles.header_actions}>
          <button className={`${styles.btn}`}>
            <Image
              src={ICONS.share}
              width={15}
              height={13}
              alt=""
            />
          </button>
          <button className={`${styles.btn}`}>
            <Image
              src={ICONS.edit}
              width={15}
              height={13}
              alt=""
            />
          </button>
          <button className={`${styles.btn}`}>
            <Image
              src={ICONS.close}
              width={15}
              height={13}
              alt=""
            />
          </button>
        </div>
      </header>
      <main className={styles.task_content}>
        <span className={styles.task_title}>Website Redesign for Client X</span>
        <div className={styles.task_details}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.status}
              width={15}
              height={13}
              alt=""
            />
            <span>Status</span>
          </span>
          <span className={`${styles.badge} ${styles.progress}`}>In Progress</span>
        </div>

        <div className={styles.task_details}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.assignee}
              width={15}
              height={13}
              alt=""
            />
            <span>Assignee</span>
          </span>
          <div className={`${styles.details_assignee}`}>
            <Link href="#" className={styles.btn}>
              <Image
                src={ICONS.assignee}
                width={15}
                height={13}
                alt=""
              />
              <span>Hakeem</span>
            </Link>

            <Link href="#" className={styles.btn}>
              <Image
                src={ICONS.assignee}
                width={15}
                height={13}
                alt=""
              />
              <span>Emanuel</span>
            </Link>
          </div>
        </div>


        <div className={styles.task_details}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.date}
              width={15}
              height={13}
              alt=""
            />
            <span>Date</span>
          </span>
          <span className={`${styles.details_date}`}>10 Jan, 2025 - 10 May, 2025</span>
        </div>

        <div className={styles.task_details}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.tags}
              width={15}
              height={13}
              alt=""
            />
            <span>Tags</span>
          </span>
          <span className={`${styles.details_tags}`}>
            <span className={`${styles.badge} ${styles.danger}`}>
              <Image
                src={ICONS.design}
                width={15}
                height={13}
                alt=""
              />
              <span>Design</span>
            </span>

            <span className={`${styles.badge} ${styles.completed}`}>
              <Image
                src={ICONS.client}
                width={15}
                height={13}
                alt=""
              />
              <span>Client Work</span>
            </span>
          </span>
        </div>

        <article className={styles.task_desc}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.desc}
              width={15}
              height={13}
              alt=""
            />
            <span>Description</span>
          </span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quidem magnam excepturi quaerat placeat laudantium quo amet, labore nobis.
          </p>
        </article>

        <div className={styles.task_attachments_container}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.attachment}
              width={15}
              height={13}
              alt=""
            />
            <span>Attachment</span>
          </span>
          <Link href="#" className={styles.task_action_download}>
            <Image
              src={ICONS.download}
              width={15}
              height={13}
              alt=""
            />
            <span>Download</span>
          </Link>
        </div>
        <div className={styles.task_attachment_contents}>
          <button className={styles.btn_attach}>
            <Image
              src={ICONS.add}
              width={24}
              height={24}
              alt=""
            />
          </button>
        </div>

        <div className={styles.task_list_container}>
          <span className={styles.details_labels}>
            <Image
              src={ICONS.list}
              width={15}
              height={13}
              alt=""
            />
            <span>Task List</span>
          </span>
          <table border={1}>
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Category</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Schedule initial client meeting</td>
                <td>Discovery</td>
                <td>
                  <span className={`${styles.completed} ${styles.badge}`}>Completed</span>
                </td>
                <td>Jan 3, 2025</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Gather business goals and user needs</td>
                <td>Discovery</td>
                <td>
                  <span className={`${styles.completed} ${styles.badge}`}>Completed</span>
                </td>
                <td>Jan 3, 2025</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Review current website performance</td>
                <td>Discovery</td>
                <td>
                  <span className={`${styles.progress} ${styles.badge}`}>In Progress</span>
                </td>
                <td>Jan 3, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
