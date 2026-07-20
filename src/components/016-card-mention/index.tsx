import Image from "next/image";
import styles from "./mention.module.css";
import Link from "next/link";

const ICON_LINK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig2NiAxOTMgMTM0KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmstaWNvbiBsdWNpZGUtbGluayI+PHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiLz48cGF0aCBkPSJNMTQgMTFhNSA1IDAgMCAwLTcuNTQtLjU0bC0zIDNhNSA1IDAgMCAwIDcuMDcgNy4wN2wxLjcxLTEuNzEiLz48L3N2Zz4=";
const ICON_FLAME = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMzggMTQ1IDIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZmxhbWUtaWNvbiBsdWNpZGUtZmxhbWUiPjxwYXRoIGQ9Ik04LjUgMTQuNUEyLjUgMi41IDAgMCAwIDExIDEyYzAtMS4zOC0uNS0yLTEtMy0xLjA3Mi0yLjE0My0uMjI0LTQuMDU0IDItNiAuNSAyLjUgMiA0LjkgNCA2LjUgMiAxLjYgMyAzLjUgMyA1LjVhNyA3IDAgMSAxLTE0IDBjMC0xLjE1My40MzMtMi4yOTQgMS0zYTIuNSAyLjUgMCAwIDAgMi41IDIuNXoiLz48L3N2Zz4=";
const ICON_ATLASSIAN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVR4nLXUOU/DMBgG4G9gQ+IvsLCxAOIaqBgbJ61IHKFKiIkF/gE7P4iroU0DPahEVWoXwcAEbBzi2NigrZFTmh4OcaqGSB46+Hvet3EMMMyjOjeAsk/wLw8qpCCeZhA/ZpA424keUOwXdzhfKPse7XCtFPPSd5aW34oQOLX6hrdbvEUHoMyHAPBlVJejARSr6Q+QzOjDN3PjvsP5wpSBThZHA9T8ZCCAqTUaoFQnJAADo7Yw/OD1ylQXOWkEApikhxuezGNIlppgkF33Nz+SgcCwLZD9CMkiA4M2wKQx0JwLKRC6hVYy3K+WA9jdeA2JwrYcCNuC35Z8swdQBvrVGijWtxTA9EgyvGB6d04vgOkhIKciB0gLDDonTz8IGOQTzPKScOGJDdphpOnFBgzM2iyg3F0IgIFZnw9O7wdgqoN6roUChBaJoi7UF4GNdhD7QQ6QVn8L1X4WXuAgoNfxb5gVL8zfDfg3dND571O+Z1x4B5fTPYFupYDXAvmkFwDyCqvFsS6Qm3FbBALuvn1+kX2FaLAnHgqnLAfo/Q89BGDvBK8KKgAAAABJRU5ErkJggg==";

export const MentionCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <div className={styles.icon_container}>
            <Image
              src={ICON_LINK}
              width={38}
              height={38}
              alt=""
              className={styles.icon}
            />
          </div>
          <div className={styles.card_title_container}>
            <span className={styles.card_title}>Link Mentions</span>
            <span className={styles.card_badge}>Save upto 80% Off</span>
          </div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.card_target}>
            <Image
              src={ICON_ATLASSIAN}
              width={20}
              height={20}
              alt=""
            />
            <Link href="#" className={styles.url}>www.atlassian.com</Link>
          </div>
          <article className={styles.description}>
            <p>Bad Customer Onboarding Experiences</p>
            <p>- Examples & How to avoid them</p>
          </article>
          <div className={styles.card_trend}>
            <span className={styles.card_popularity}>
              <Image
                src={ICON_FLAME}
                width={20}
                height={20}
                alt=""
              />
              <span className={styles.trend_text}>Popular</span>
            </span>
          </div>
        </div>

        <div className={styles.card_footer}>
          <span className={styles.footer_badge}>DR 86</span>
          <span className={styles.footer_badge}>Traffic 83.6K</span>
        </div>
      </div>
      <span className={styles.text}>1 Token</span>
    </div>
  )
}