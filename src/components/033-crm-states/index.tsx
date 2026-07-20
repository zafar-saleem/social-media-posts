import Link from "next/link";
import styles from "./crm.module.css";
import Image from "next/image";

const ICON_CALENDAR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1pY29uIGx1Y2lkZS1jYWxlbmRhciI+PHBhdGggZD0iTTggMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjwvc3ZnPg==";
const ICON_DRAFT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ub3RlcGFkLXRleHQtZGFzaGVkLWljb24gbHVjaWRlLW5vdGVwYWQtdGV4dC1kYXNoZWQiPjxwYXRoIGQ9Ik04IDJ2NCIvPjxwYXRoIGQ9Ik0xMiAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMiAydjIiLz48cGF0aCBkPSJNMjAgMTJ2MiIvPjxwYXRoIGQ9Ik0yMCAxOHYyYTIgMiAwIDAgMS0yIDJoLTEiLz48cGF0aCBkPSJNMTMgMjJoLTIiLz48cGF0aCBkPSJNNyAyMkg2YTIgMiAwIDAgMS0yLTJ2LTIiLz48cGF0aCBkPSJNNCAxNHYtMiIvPjxwYXRoIGQ9Ik00IDhWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNOCAxMGg2Ii8+PHBhdGggZD0iTTggMTRoOCIvPjxwYXRoIGQ9Ik04IDE4aDUiLz48L3N2Zz4=";
const ICON_EMAIL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLWljb24gbHVjaWRlLW1haWwiPjxwYXRoIGQ9Im0yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNyIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgcng9IjIiLz48L3N2Zz4=";
const ICON_OPENED = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLW9wZW4taWNvbiBsdWNpZGUtbWFpbC1vcGVuIj48cGF0aCBkPSJNMjEuMiA4LjRjLjUuMzguOC45Ny44IDEuNnYxMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlYxMGEyIDIgMCAwIDEgLjgtMS42bDgtNmEyIDIgMCAwIDEgMi40IDBsOCA2WiIvPjxwYXRoIGQ9Im0yMiAxMC04Ljk3IDUuN2ExLjk0IDEuOTQgMCAwIDEtMi4wNiAwTDIgMTAiLz48L3N2Zz4=";
const ICON_FORWARD = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mb3J3YXJkLWljb24gbHVjaWRlLWZvcndhcmQiPjxwYXRoIGQ9Im0xNSAxNyA1LTUtNS01Ii8+PHBhdGggZD0iTTQgMTh2LTJhNCA0IDAgMCAxIDQtNGgxMiIvPjwvc3ZnPg==";
const ICON_TICK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2staWNvbiBsdWNpZGUtY2lyY2xlLWNoZWNrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im05IDEyIDIgMiA0LTQiLz48L3N2Zz4=";
const ICON_IGNORED = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtbWludXMtaWNvbiBsdWNpZGUtY2lyY2xlLW1pbnVzIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik04IDEyaDgiLz48L3N2Zz4=";
const ICON_INFO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMzcyMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbmZvLWljb24gbHVjaWRlLWluZm8iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDE2di00Ii8+PHBhdGggZD0iTTEyIDhoLjAxIi8+PC9zdmc+";
const ICON_ARROW = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24taWNvbiBsdWNpZGUtY2hldnJvbi1kb3duIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=";
const ICON_UP_TREND = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMzAgMjQ4IDIzOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy11cC1pY29uIGx1Y2lkZS10cmVuZGluZy11cCI+PHBhdGggZD0iTTE2IDdoNnY2Ii8+PHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIvPjwvc3ZnPg==";
const ICON_DOWN_TRENT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMzAgMjQ4IDIzOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy1kb3duLWljb24gbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwYXRoIGQ9Ik0xNiAxN2g2di02Ii8+PHBhdGggZD0ibTIyIDE3LTguNS04LjUtNSA1TDIgNyIvPjwvc3ZnPg==";

export const CRMStates = () => {
  return (
    <div className={styles.crm_container}>
      <form className={styles.crm_tabs}>
        <ul>
          <li>
            <Link href="#" className={`${styles.active} ${styles.tab_item}`}>Last 7 months</Link>
          </li>
          <li>
            <Link href="#" className={styles.tab_item}>This month</Link>
          </li>
          <li>
            <Link href="#" className={styles.tab_item}>Custom</Link>
          </li>
        </ul>
      </form>



      <div className={styles.card_block}>
        <div className={styles.card_title_container}>
          <span className={styles.card_block_title}>Initiation</span>
          <button popoverTarget="init_info" className={styles.card_block_info}>i</button>
          <span className={styles.info} id="init_info" popover="">
            <Image
              src={ICON_INFO}
              width={15}
              height={15}
              alt=""
            />
            <span>
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </span>
        </div>
        <div className={styles.card_content}>
          <div>
            <span>Drafted</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_DRAFT}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>134</span>
              <span className={`${styles.up_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_UP_TREND}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>28</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>

          <span className={styles.divider} />

          <div>
            <span>Sent</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_EMAIL}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>120</span>
              <span className={`${styles.up_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_UP_TREND}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>22</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>
        </div>
      </div>








      <div className={styles.card_block}>
        <div className={styles.card_title_container}>
          <span className={styles.card_block_title}>Engagement</span>
          <button popoverTarget="engage_info" className={`${styles.btn_engage} ${styles.card_block_info}`}>i</button>
          <span className={`${styles.engage_info} ${styles.info}`} id="engage_info" popover="">
            <Image
              src={ICON_INFO}
              width={15}
              height={15}
              alt=""
            />
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className={styles.card_content}>
          <div>
            <span>Opened</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_OPENED}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>102</span>
              <span className={`${styles.up_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_UP_TREND}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>9</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>

          <span className={styles.divider} />

          <div>
            <span>Reply</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_FORWARD}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>45</span>
              <span className={`${styles.up_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_UP_TREND}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>12</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>
        </div>
      </div>






      <div className={styles.card_block}>
        <div className={styles.card_title_container}>
          <span className={styles.card_block_title}>Outcome</span>
          <button popoverTarget="info" className={styles.card_block_info}>i</button>
          <span className={styles.info} id="info" popover="">
            <Image
              src={ICON_INFO}
              width={15}
              height={15}
              alt=""
            />
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className={styles.card_content}>
          <div>
            <span>Booked</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_TICK}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>16</span>
              <span className={`${styles.up_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_UP_TREND}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>9</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>

          <span className={styles.divider} />

          <div>
            <span>Ingored</span>
            <div>
              <span className={styles.icon_container}>
                <Image
                  src={ICON_IGNORED}
                  width={24}
                  height={24}
                  alt=""
                />
              </span>
              <span>39</span>
              <span className={`${styles.down_trend} ${styles.trend}`}>
                <span>
                  <Image
                    src={ICON_DOWN_TRENT}
                    width={14}
                    height={14}
                    alt=""
                  />
                </span>
                <span className={styles.trend_label}>7</span>
              </span>
            </div>
            <span>vs last period</span>
          </div>
        </div>
      </div>
    </div>
  )
}