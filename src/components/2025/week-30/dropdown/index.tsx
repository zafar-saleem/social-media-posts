import Image from "next/image";
import styles from "./dropdown.module.css";

const REFUND = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUgMjU1IDI1NSkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11bmRvMi1pY29uIGx1Y2lkZS11bmRvLTIiPjxwYXRoIGQ9Ik05IDE0IDQgOWw1LTUiLz48cGF0aCBkPSJNNCA5aDEwLjVhNS41IDUuNSAwIDAgMSA1LjUgNS41YTUuNSA1LjUgMCAwIDEtNS41IDUuNUgxMSIvPjwvc3ZnPg==";
const RECEIPT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUgMjU1IDI1NSkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yZWNlaXB0LXRleHQtaWNvbiBsdWNpZGUtcmVjZWlwdC10ZXh0Ij48cGF0aCBkPSJNNCAydjIwbDItMSAyIDEgMi0xIDIgMSAyLTEgMiAxIDItMSAyIDFWMmwtMiAxLTItMS0yIDEtMi0xLTIgMS0yLTEtMiAxWiIvPjxwYXRoIGQ9Ik0xNCA4SDgiLz48cGF0aCBkPSJNMTYgMTJIOCIvPjxwYXRoIGQ9Ik0xMyAxNkg4Ii8+PC9zdmc+";
const LINK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUgMjU1IDI1NSkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rLWljb24gbHVjaWRlLWxpbmsiPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIi8+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIi8+PC9zdmc+";
const SEARCH = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUgMjU1IDI1NSkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLXNlYXJjaC1pY29uIGx1Y2lkZS1maWxlLXNlYXJjaCI+PHBhdGggZD0iTTE0IDJ2NGEyIDIgMCAwIDAgMiAyaDQiLz48cGF0aCBkPSJNNC4yNjggMjFhMiAyIDAgMCAwIDEuNzI3IDFIMThhMiAyIDAgMCAwIDItMlY3bC01LTVINmEyIDIgMCAwIDAtMiAydjMiLz48cGF0aCBkPSJtOSAxOC0xLjUtMS41Ii8+PGNpcmNsZSBjeD0iNSIgY3k9IjE0IiByPSIzIi8+PC9zdmc+"

export const Dropdown = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zafar</td>
            <td>Paid</td>
            <td>July 9, 2025</td>
            <td>
              <button popoverTarget="dropdown_one">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyIDcgMTgpIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZWxsaXBzaXMtdmVydGljYWwtaWNvbiBsdWNpZGUtZWxsaXBzaXMtdmVydGljYWwiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIxIi8+PC9zdmc+"
                  width={15}
                  height={15}
                  alt=""
                />
              </button>
              <ul
                popover="auto"
                id="dropdown_one"
                className={styles.action_list}
              >
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={REFUND}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Refund payment</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={RECEIPT}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Send receipt</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={LINK}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Copy link</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={SEARCH}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>View details</span>
                  </button>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Saleem</td>
            <td>Paid</td>
            <td>July 10, 2025</td>
            <td>
              <button popoverTarget="dropdown_two">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyIDcgMTgpIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZWxsaXBzaXMtdmVydGljYWwtaWNvbiBsdWNpZGUtZWxsaXBzaXMtdmVydGljYWwiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIxIi8+PC9zdmc+"
                  width={15}
                  height={15}
                  alt=""
                />
              </button>
              <ul
                popover="auto"
                id="dropdown_two"
                className={styles.action_list}
              >
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={REFUND}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Refund payment</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={RECEIPT}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Send receipt</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={LINK}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>Copy link</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span className={styles.icon}>
                      <Image
                        src={SEARCH}
                        width={15}
                        height={15}
                        alt=""
                      />
                    </span>
                    <span className={styles.action_label}>View details</span>
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}