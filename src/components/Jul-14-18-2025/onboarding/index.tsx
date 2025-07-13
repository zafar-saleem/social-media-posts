import Link from "next/link";
import styles from "./onboarding.module.css";
import Image from "next/image";

export const Onboarding = () => {
  return (
    <div className={styles.onboarding}>
      <nav>
        <ul>
          <li>
            <Link href="#">
              <span className={styles.icon}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLWljb24gbHVjaWRlLW1haWwiPjxwYXRoIGQ9Im0yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNyIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgcng9IjIiLz48L3N2Zz4="
                  width={15}
                  height={15}
                  alt=""
                />
              </span>
              <span className={styles.label}>Sync email account</span>
            </Link>
            <div className={`${styles.email_popover} ${styles.popover}`}>
              <iframe width="365" height="215" src="https://www.youtube.com/embed/nQPWi06Xhmw?si=lQxEdaXNZIzyaIOP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <p>Connect your email account and automatically import the people and companies</p>
              <div className={styles.actions}>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLWljb24gbHVjaWRlLW1haWwiPjxwYXRoIGQ9Im0yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNyIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgcng9IjIiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Go to settings</span>
                </Link>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leHRlcm5hbC1saW5rLWljb24gbHVjaWRlLWV4dGVybmFsLWxpbmsiPjxwYXRoIGQ9Ik0xNSAzaDZ2NiIvPjxwYXRoIGQ9Ik0xMCAxNCAyMSAzIi8+PHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Learn more</span>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#">
              <span className={styles.icon}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3dubG9hZC1pY29uIGx1Y2lkZS1kb3dubG9hZCI+PHBhdGggZD0iTTEyIDE1VjMiLz48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIvPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4="
                  width={15}
                  height={15}
                  alt=""
                />
              </span>
              <span className={styles.label}>Install our extension</span>
            </Link>
            <div className={`${styles.email_popover} ${styles.popover}`}>
              <Image
                src="https://cdn.dribbble.com/userupload/20499629/file/original-fc7fa4aa9d00174e537231367558def1.png"
                width={365} height={215}
                alt=""
              />
              <p>Install our chrome extension to Access your Attio data from Linkedin, Google meet, and Gmail</p>
              <div className={styles.actions}>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3dubG9hZC1pY29uIGx1Y2lkZS1kb3dubG9hZCI+PHBhdGggZD0iTTEyIDE1VjMiLz48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIvPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Install</span>
                </Link>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leHRlcm5hbC1saW5rLWljb24gbHVjaWRlLWV4dGVybmFsLWxpbmsiPjxwYXRoIGQ9Ik0xNSAzaDZ2NiIvPjxwYXRoIGQ9Ik0xMCAxNCAyMSAzIi8+PHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Learn more</span>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#">
              <span className={styles.icon}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtbWludXMtaWNvbiBsdWNpZGUtY2xpcGJvYXJkLW1pbnVzIj48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNOSAxNGg2Ii8+PC9zdmc+"
                  width={15}
                  height={15}
                  alt=""
                />
              </span>
              <span className={styles.label}>Create a report</span>
            </Link>
            <div className={`${styles.email_popover} ${styles.popover}`}>
              <iframe width="365" height="215" src="https://www.youtube.com/embed/2btS31AU3Iw?si=vRDPqRzEnPb7Fqis" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <p>Report helps you visualize your lists and records through highly customizable charts and metrics</p>
              <div className={styles.actions}>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtbWludXMtaWNvbiBsdWNpZGUtY2xpcGJvYXJkLW1pbnVzIj48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNOSAxNGg2Ii8+PC9zdmc+"
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Go to reports</span>
                </Link>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leHRlcm5hbC1saW5rLWljb24gbHVjaWRlLWV4dGVybmFsLWxpbmsiPjxwYXRoIGQ9Ik0xNSAzaDZ2NiIvPjxwYXRoIGQ9Ik0xMCAxNCAyMSAzIi8+PHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Learn more</span>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#">
              <span className={styles.icon}>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzQgMTM0IDEzNCkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13b3JrZmxvdy1pY29uIGx1Y2lkZS13b3JrZmxvdyI+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJNNyAxMXY0YTIgMiAwIDAgMCAyIDJoNCIvPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHg9IjEzIiB5PSIxMyIgcng9IjIiLz48L3N2Zz4="
                  width={15}
                  height={15}
                  alt=""
                />
              </span>
              <span className={styles.label}>Create a workflow</span>
            </Link>
            <div className={`${styles.email_popover} ${styles.popover}`}>
              <iframe width="365" height="215" src="https://www.youtube.com/embed/jHTU_jUnswY?si=XcCUOHSBmli53fQi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <p>Workflows let you build automated processes with your Attio data, AI agents, and external tools</p>
              <div className={styles.actions}>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtbWludXMtaWNvbiBsdWNpZGUtY2xpcGJvYXJkLW1pbnVzIj48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNOSAxNGg2Ii8+PC9zdmc+"
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Go to workflows</span>
                </Link>
                <Link href="#">
                  <span className={styles.icon}>
                    <Image
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWZhZmEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13b3JrZmxvdy1pY29uIGx1Y2lkZS13b3JrZmxvdyI+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJNNyAxMXY0YTIgMiAwIDAgMCAyIDJoNCIvPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHg9IjEzIiB5PSIxMyIgcng9IjIiLz48L3N2Zz4="
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  <span>Learn more</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.contents}>
        
      </div>
    </div>
  )
}
