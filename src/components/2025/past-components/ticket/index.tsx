import Image from "next/image";
import styles from "./ticket.module.css";
import { TicketHeader } from "./components/header";
import Link from "next/link";

const ICONS = {
  reply: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVR4nO2ZTWgTQRSAJ+2h4B8UFX+wbd7skrT73tYm721AD4KiiCJ60IAnLxa8+AOKeFBQUEE8efHgxYMXES+KWPTizR8QRAQRRfRmFXoQW8XfVnaTYpqkNptmkx3IB++6O9/OezPzZpVq08YcbDe3RpmOdrKbNPGoMpZ8vhOQz2iSP5pkSpmIPTS0XJPc9wWmQ5lG0vU2aJIPpRKmiSQ0yhFA+VkuYYxIf7+3FJBHqgkYIwIonkZ+/z+JuIskglQi+TGXRGxFbDu3RJPcrEUgtiKWy1kgeRtGInYiQHwQSL6HlQgCZSJYllFeAckDQL6iUY6DK5sdx1nUvFRCvlGXQA0ByL8A+Skgn7ScjB2JRBJzazXy66gkqooRPwSU3UqpjoZIAPKwRv7WTIkyoTdJR3bWLbBicHChJr7WKoEqqTcSuhVIupLWKC9aPfgqszMGmN1Rs4jt5Bwgftnqgc8Sk0B81NjU0pVxLlSaWcj7NMrXGAx8qiJcPhF6+fVXj1immcN7Qsmk0+sXA/H1GAx+qjSAZBwGvZRq6hElKhnkR3VtnMX+413YF65iXtCTzqzuw8yARd46y+Vdfp4D8lVN8mR+tcgHVD30um63Jr4d5mVzPdO27S4LeaMmPg/Ez8KlGI/558G6GysgPjZbjx5WpEJsQDKa+LJG+Vyj0GkV51a313W7AeXCXGe+wqzYXfOSSaV4mSa5F4XINBZKT/ldWUWg7FUNoEMjn9LIv6MQKZLQxIdnuyfwGzbVKIoFOxqRSAAQbwHiL1VkJm1kSzWKPsdb6X+dqER8wOGcvyGWy1jEh1TDL7FJzkZ5ia1d2ea3yWV7yp3ofisgf4zk4UqpoC5nFvzEvFevlvzoyec7NcrjGUWP4ikTsYPNs5DCBRHer0wFUG6VbI6XlKkkMbu1JLXuKoNJ/GsA+bkyGSC+WJyRT8pkNPH24lFlXJlMqnB4De6Slen0um63H60eR5s2bVRz+AtFrg81jsSeUQAAAABJRU5ErkJggg==",
  calendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MjZmNzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1pY29uIGx1Y2lkZS1jYWxlbmRhciI+PHBhdGggZD0iTTggMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjwvc3ZnPg==",
}

export const Ticket = () => {
  return (
    <div className={styles.ticket_container}>
      <TicketHeader />
      <main className={styles.ticket_contributor_container}>
        <section className={styles.ticket_grid}>
          <div className={styles.ticket_grid_cell}>
            <span className={styles.ticket_label}>Project name</span>
            <span className={styles.ticket_value}>Revamp Payment</span>
          </div>

          <div className={styles.ticket_grid_cell}>
            <span className={styles.ticket_label}>Project Manager</span>
            <div className={`${styles.ticket_value}`}>
              <Link className={styles.ticket_avatar} href="#"></Link>
              <span className={styles.ticket_value_text}>Miguel</span>
            </div>
          </div>

          <div className={styles.ticket_grid_cell}>
            <span className={styles.ticket_label}>Assign to</span>
            <div className={styles.ticket_value}>
              <Link
                href="#"
                className={`
                  ${styles.ticket_avatar}
                  ${styles.ticket_avatar_assigned}
                  ${styles.one}`}></Link>
              <Link
                href="#"
                className={`
                  ${styles.ticket_avatar}
                  ${styles.ticket_avatar_assigned}
                  ${styles.two}`}></Link>
              <Link
                href="#"
                className={`
                  ${styles.ticket_avatar}
                  ${styles.ticket_avatar_assigned}
                  ${styles.three}`}></Link>
            </div>
          </div>

          <div className={styles.ticket_grid_cell}>
            <span className={styles.ticket_label}>Timeline</span>
            <div className={styles.ticket_value}>
              <Image
                src={ICONS.calendar}
                width={15}
                height={15}
                alt=""
              />
              <span className={styles.ticket_value_text}>12/12/2025 - 04/01/2026</span>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.ticket_details}>
        <div className={`${styles.ticket_details_tabs}`}>
          <Link href="#" className={`${styles.tab_link} ${styles.ticket_active}`}>
            <span>Comments</span>
            <span className={styles.tab_notification_counter}>1</span>
          </Link>
          <Link href="#" className={`${styles.tab_link}`}>
            <span>Details</span>
          </Link>
          <Link href="#" className={`${styles.tab_link}`}>
            <span>Attachments</span>
          </Link>
        </div>
        <div className={`${styles.separator}`} />
        <div className={styles.ticket_comments}>
          <Link
            href="#"
            className={`${styles.ticket_avatar}`}>
          </Link>
          <div className={styles.ticket_comment_details}>
            <Link href="#" className={styles.ticket_commenter}>Insam</Link>
            <section className={styles.ticket_comment_text_info}>
              <span>Design Lead</span><span className={styles.separator}></span><span>Friday 3:12 PM</span>
            </section>
            <p className={styles.ticket_comments_text}>Lorem ipsum dolor sit amet.</p>
            <button className={styles.btn}>
              <Image
                src={ICONS.reply}
                width={15}
                height={15}
                alt=""
              />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}