import Link from "next/link";
import styles from "./activity-feed.module.css";
import Image from "next/image";

const ICONS = {
  user: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFOklEQVR4nO2aW2iXZRzHt7ZyOjKXOa0uyquSWWYR1EV1EYkWlhEFs7oJVxG4hkpdpNlBiFkQrMQgigjyRkFQtLOWRAdsZUSpU/PCDhetA0pTm/aJ3/w+9PD2vu/zvIelhD/4w9jze36H5/A7fJ+3oeE0/U8JOBeYBzwLbAJ2Ab8CR/Wzv3dqzHhuA9oaTgUCWoB7gXeA4xSnY8DbwD3AmJPhwFhgMfCjZ9QRYAuwTDszzVYcOFO/Nv3Pxh4HtmqOox+ARbY4/5UTtwD7PAO2AwuAc0rImgB0AZ978vYCc0b7GL3kKewHZtUofzbwpSd/Ve27A0yR4UZ/AAuBplqVnNDTBDwMDHm7Pbku4VO13SjqTI+Yc6UikwWBA8Ahze2NMQy4HNgtnXvMhjp2wjnxsYXYAP+13s5l0Z8KzRuBuywQZMiaCHzqOTO5yp3o95xoDfAvVzh1EahX5952tB24DngVOJxwzIy9IENmq+fM9lJ3xrvYOyN24jHxWuJbCjQHFuh8JcQvNO9bYFzOzrhjtqpMiHUXO/dOADcAfwHDZlxBPeO00ka9gTvjAsDsIsnO5YmFEVHmG/EuLeJEIjAY/ZZ3fIEe776EjxiwRBP6QyEWuFm8+6qUGMAnkjMvh6cZ2CG+npDAFq/sCCY7YJ14Hynpg5PzhOQ8H+CbI77vcxdOxdtIhIhQ3qTjYHRRSR+cLLv4Ru8G+Bq9SDo/j9ESmNGCCOVXiHdvSft9WVdJ1ncRvA+I9828fuKYKtJgAQjcLYFrS9qfTLxGhyJ42xTmh1PtVHlttCVSuSVAoxUl7fdlnSHDyMr0Cf4PRjjh1rTB5zS4LFL5izEhOpa8jD+2QHBYmTa4KdPLdGFrgpeuAHlNVmsE7+3i3ZA2OKDBaZGK3yqUacPyXOYeH8HbId5daYODGpwYqdgVc9eUtD0pz8ohowkRvOeJ9+e0QYsERmdFKnZZdkZJ27McGR/BO0a8R+pwxHoKo0tK2p7lyNlVHXFHK7dk9/j3i//ikrYn5VkXGetI7tEqetkPxh6FSHk/Sd6Uqpfdhd9gT2HGi/dgBduTMr+WzI6q4dclxOURgi7LXJGSJMDO6KaqCdGVKFsjBK0U7wsVbM8qeV4uUKLMzSrGXNGYCy575fsdFe33o9DTMYWjiltXNKbfTwHKRvcHhL3GP2TgxCvAg8CNFsWsCAwUiMYzC+gG1gO/e/JWRJbxm2NKc0M3GgOd5DPAL6TTtpy52zLmGAhxZ0Rj5WDVzoaAgYZJEQMkC2W/GnjI7gvwYeh4eIZv1mJ0GjwU0pVAdw4EMQJB+0Zf5eFTGejLWs39KIfPMCyjN4oAbpwAH1yI7o6Z0OLBpIsiu7slWqWR3bDWNYf/eq8cMRDhUeDCCD2LNWd3NGLjoRWH04pCRbj7FBwcTIqAgWBlYKBfAiM2Ge/rneVfEROY6fUrxZ4y9D7hALFJHuCwxisw0d/r5XxjAfmNwobXJV6ujkrHTPFN8k5IXyEnvCPm4MzPgNXeO+FxbwWjisyIlyvb4fcSOlZLt7OhHAhoUL52xH8S6Kv8XpGv81LgdQ+MQAVte1XBUz1n9tfVSAV0zvDahIG6WgW3M+6YDSmCjMbTW7Mi4JB3nNrrVtLiBQCUYWt7fVWy2+HJ7xvVt3dFmj0Jh7rKfMWgArAr4cBAna/FMbvTo4TmBwL7YOBJgdIdKR8MTNfYU+o//AttCbX7ZH0BYeX3fAOUE4kxlobVmXaeFAfSyABla3TUdG1UeT/ofVQzqDprg3jm1tXvn6aGU5D+Bj32gHc32SATAAAAAElFTkSuQmCC",
  copy: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZDJkMmQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5LWljb24gbHVjaWRlLWNvcHkiPjxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeD0iOCIgeT0iOCIgcng9IjIiIHJ5PSIyIi8+PHBhdGggZD0iTTQgMTZjLTEuMSAwLTItLjktMi0yVjRjMC0xLjEuOS0yIDItMmgxMGMxLjEgMCAyIC45IDIgMiIvPjwvc3ZnPg==",
  up_right: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZDJkMmQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXVwLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtdXAtcmlnaHQiPjxwYXRoIGQ9Ik0xMyA1SDE5VjExIi8+PHBhdGggZD0iTTE5IDVMNSAxOSIvPjwvc3ZnPg==",
  eye: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZDJkMmQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUtaWNvbiBsdWNpZGUtZXllIj48cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=",
  warning: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmExM2IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmlhbmdsZS1hbGVydC1pY29uIGx1Y2lkZS10cmlhbmdsZS1hbGVydCI+PHBhdGggZD0ibTIxLjczIDE4LTgtMTRhMiAyIDAgMCAwLTMuNDggMGwtOCAxNEEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS43My0zIi8+PHBhdGggZD0iTTEyIDl2NCIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=",
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjZjViNWEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  success: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1NDkwN2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2staWNvbiBsdWNpZGUtY2lyY2xlLWNoZWNrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im05IDEyIDIgMiA0LTQiLz48L3N2Zz4=",
  risk: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkZDRmNTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGllbGQtYWxlcnQtaWNvbiBsdWNpZGUtc2hpZWxkLWFsZXJ0Ij48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiLz48cGF0aCBkPSJNMTIgOHY0Ii8+PHBhdGggZD0iTTEyIDE2aC4wMSIvPjwvc3ZnPg==",
  info: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTk4NmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmlhbmdsZS1hbGVydC1pY29uIGx1Y2lkZS10cmlhbmdsZS1hbGVydCI+PHBhdGggZD0ibTIxLjczIDE4LTgtMTRhMiAyIDAgMCAwLTMuNDggMGwtOCAxNEEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS43My0zIi8+PHBhdGggZD0iTTEyIDl2NCIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=",
};

export const ActivityFeed = () => {
  return (
    <div className={styles.feed_container}>
      <div className={styles.feed_timeline} />
      <h1 className={styles.feed_title}>Activity Feed</h1>
      <div className={`${styles.feed_box}`}>
        <span className={`${styles.feed_date} ${styles.feed_current}`}>May 13</span>
        <div className={styles.feed_progress_container}>
          <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
            <Image
              src={ICONS.warning}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span className={styles.feed_text_box}>Invoice INV-1025 marked</span>
          <div className={`${styles.feed_status_warning} ${styles.status}`}>
            <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
              <Image
                src={ICONS.close}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <span className={`${styles.feed_status_overdue}`}>Overdue</span>
          </div>
          <span className={styles.feed_text_box}>by</span>
          <span className={styles.feed_text_user}>Ridgewear Retail</span>
          <div className={styles.feed_text_target_page}>
            <Image
              src={ICONS.up_right}
              width={15}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={`${styles.feed_box}`}>
        <span className={`${styles.feed_date} ${styles.feed_regular}`}>May 12</span>
        <div className={styles.feed_progress_container}>
          <span className={styles.feed_text_box}>Order ORD-2481</span>
          <div className={`${styles.feed_status_success} ${styles.status}`}>
            <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
              <Image
                src={ICONS.success}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <span className={`${styles.feed_status_overdue}`}>Shipped</span>
          </div>
          <span className={styles.feed_text_box}>via</span>
          <span className={styles.feed_text_box_bold}>Shopify</span>
          <span className={styles.feed_text_box}>to</span>
          <span className={styles.feed_text_user}>Urban Threads</span>
          <div className={styles.feed_text_target_page}>
            <Image
              src={ICONS.up_right}
              width={15}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className={`${styles.feed_box}`}>
        <div className={`${styles.feed_box_title_container}`}>
          <span className={styles.feed_box_title}>
            Tracking
          </span>
          <div className={styles.feed_tracking_info_container}>
            <span>1Z112312312321</span>
            <div className={styles.feed_tracking_icon}>
              <Image
                src={ICONS.copy}
                width={15}
                height={15}
                alt=""
              />
            </div>
          </div>
        </div>

        <span className={`${styles.feed_date} ${styles.feed_risk}`}>May 11</span>
        <div className={`${styles.feed_progress_container} ${styles.feed_alert_risk}`}>
          <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
            <Image
              src={ICONS.risk}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span className={styles.feed_text_box}>Risk Alert</span>
          <div className={`${styles.feed_user_container} ${styles.feed_icon}`}>
            <div className={styles.feed_user_icon}>
              <Image
                src={ICONS.user}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <span className={styles.feed_text_box_bold}>
              Trendy Terra
            </span>
          </div>
          <span className={styles.feed_text_box}>flagged as</span>
          <div className={`${styles.feed_status_danger} ${styles.status}`}>
            <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
              <Image
                src={ICONS.risk}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <span className={`${styles.feed_status_risk}`}>High Risk</span>
          </div>
          <span className={styles.feed_text_box}>After missed payment</span>
          <div className={styles.feed_text_target_page}>
            <Image
              src={ICONS.up_right}
              width={15}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className={`${styles.feed_box}`}>
        <span className={`${styles.feed_date} ${styles.feed_success}`}>May 12</span>
        <div className={styles.feed_progress_container}>
          <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
            <Image
              src={ICONS.success}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span className={styles.feed_text_box}>F4F5F9</span>
          <span className={styles.feed_text_box_bold}>Glowy Beauty Hub</span>
          <span className={styles.feed_text_box}>connected bank via Plaid</span>
          <div className={styles.feed_text_target_page}>
            <Image
              src={ICONS.up_right}
              width={15}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className={`${styles.feed_box}`}>
        <div className={styles.feed_box_title_container}>
          <span className={styles.feed_box_title}>
            Credit Score
          </span>
          <div className={styles.feed_tracking_info_container}>
            <span>664</span>
            <div className={styles.feed_tracking_icon}>
              <Image
                src={ICONS.eye}
                width={15}
                height={15}
                alt=""
              />
            </div>
          </div>
        </div>
        <span className={`${styles.feed_date} ${styles.feed_success_initial}`}>May 12</span>
        <div className={styles.feed_progress_container}>
          <div className={`${styles.feed_icon_container} ${styles.feed_icon}`}>
            <Image
              src={ICONS.info}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <span className={styles.feed_text_box}>Product Assigned:</span>
          <div className={`${styles.feed_user_container} ${styles.feed_icon}`}>
            <div className={styles.feed_user_icon}>
              <Image
                src={ICONS.user}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <span className={styles.feed_text_box_bold}>
              Canvas Urban Backpack
            </span>
          </div>
          <span className={styles.feed_text_box}>to</span>
          <Link href="#">
            <span className={styles.feed_text_box_bold}>Urban Threads</span>
          </Link>
          <div className={styles.feed_text_target_page}>
            <Image
              src={ICONS.up_right}
              width={15}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}