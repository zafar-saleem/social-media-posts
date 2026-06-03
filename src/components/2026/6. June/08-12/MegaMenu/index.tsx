import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const MegaMenu = () => {
  return (
    <>
    <header className={styles.header}>
      <label className={styles.button_menu}>
        <input type="checkbox" className={styles.menu_input} />
        <svg
          width="18" height="18" viewBox="0 0 24 16"
          fill="none" stroke="rgb(171 165 166)" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-menu-icon lucide-menu">
            <path d="M4 5h16"/>
            <path d="M4 12h16"/>
        </svg>
        <span className={`${styles.menu_text} ${styles.open}`}>Menu</span>
        <span className={`${styles.menu_text} ${styles.close}`}>Close</span>
      </label>
      <div className={styles.menu_auths}>
        <Link href="#" className={`${styles.button} ${styles.button_signup}`}>Sign Up</Link>
        <Link href="#" className={`${styles.button} ${styles.button_login}`}>Log In</Link>
      </div>



      
    </header>
    <nav className={styles.nav}>
        <div className={styles.nav_box}>
          <span className={styles.nav_title}>Manage</span>
          <Link href={`#`}>Overview</Link>
          <Link href={`#`}>Analytics</Link>
          <Link href={`#`}>Users</Link>
          <Link href={`#`}>Settings</Link>
        </div>
        <div className={styles.nav_box}>
          <span className={styles.nav_title}>Grow And Scale</span>
          <Link href={`#`}>
            Pricing <span className={styles.badge}>Updated</span>
          </Link>
          <Link href={`#`}>Subscriptions</Link>
          <Link href={`#`}>Billing</Link>
          <div className={styles.socials}>
            <Link href="#">
              <Image width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/ElEQVR4nO2cW6xdQxjH52iPCtVqaZSIO0FDhegl7kTcxYuQNDQikRQvPAiJ8CDpiUtvR/TJJZJDRIkgaJw66G5EGx60iKRxbWmIW08rPbT8mq/n2823xzr7ttbUnrXnl+yH9c1a38z891oza76ZWc4lEolEIpFIJBKJRDQAM4AlwGfAduJju5Zd6jBjXwq3P/AEsIvyIHXpl7rtC/EGNdMdwFJgFnCQiwwpMzAbWAaMaJ0Gg4qod57wPXC6KwnATGCT1q0/ZJu3S++80ojniTiidTzNFY02tsKSjLSK/Oocv+cdr2pwfqPr1zRIrzQ4vybd2KUdFBa7ogE+V+fnZKStAlbXOa54x0Py8wSod37W9Y3OH2rWn7FLmyhscEUDbFPnE11JASZqHYdDON+DKzmEqmcSMCdJwJwkAXOSBPyfHAPPNxiH/gNcnLd8mtcC43d5WQScDHzTQEQZRk3NWb7zgb/U3+p2x7QdJ6AAnKdDJLnbLjT28cCH6vpl1ybAscDP6kf+rGk5fHWegAKwUF18DUwy9uOBrZp2s2sR4GBgvV4/nHec3skCjgc+UjfPeWm3ql1GOye24HM/4DXTll7Xbvk6XkABOEHvEuEmZwBeVLsM/Me5JgD6TDt6XzPXRC2gANyurn4HjjH2Q4DvNO1B1wDgBuBfPf8loMd1g4ACsML0lnvvNuAC7Wx2AnPdGABnAX+qj0+AA11BxCLgYcCP6vJeL+1RtX9lOxuTfoSJHouPo4ooU1QCCsBl+gj+bWOMQC+wTrN7pmrXtANMRySR8dmuYKIRUNAJHeEL+xgCp5pH9EZjHzCdxjwXgNgEnAB8mjX0Au4wnc3R0ssa8fqKLEe0AgrAGTqZI4/zNcbeA7xh7lB5zxNel/c/F4joBBSAu9W9DMemG/s0YIu580TIyS4gsQrYA7yjWbxp3+mAq8z7Xu6RRikFFIAjgV80mztd9oR+TWcTgmgFFIDrNZuayXt9fal2Nk+6gEQtoAA8pVltEOG8lRE79HG+1gWiDAJebTqNx7y0e9T+E3B4oPzjFZDawCj66nKp19m8pWkriwoglEJARgOj8tiiIa+ns8L9XmdzV4ByxCcgGYFRtb2vtlea6Wy6WcA+89jeb+zHmXD//GY6m64TkNrA6Aq/XQNuMeH+k7wVpl9q2uNdKSBNBkaBF/QcCXP1GvvZGg6TP+DKrhIQmG4Co1vqBUY13P+tnvuQl/aA2n8ADu0KAWkjMKoT5/8J92tnIws0hVe7RcCBdgKjwCNZ4X65e4HfNO22UgtIjsCohvvX6rXPZnRG1Q00J5dSQOAKs0Hn7Wbnfz0fp2SF+72FTB/bzqYUAjI6z/FHEYFRswprT7h/jIVMD5dGQGAqsFFd/NrK8o06PiW0L3zgzS2faxYyXRS9gIy2W+/q5fLOdklB5fHD/VnIjqopsQu43FRoQcFlutyMYsZiIGoBYyMJmJMkYE6SgDlJAnawgMNdsNlwktZxa8jtrrMy0ip59utm7B9e0+L1rR7X+DP2OSG3u1Y3XC/LSKu0sj+3zeOhOsft7B/ee5yxAmKRC7jlX1ZSzXQlAzhTN+qE2fLvbYnfVCYRGRVvs9ZtaciMes1nT0ZU0Dkxdiy6O32uPrbVLWKD7YbBWv12TH/JPryzU7+BE1a8jDZxsc7LVr+nEBPbtOyLgrV5iUQikUgkEolEIuFCsBs73ax3W/Wa4AAAAABJRU5ErkJggg==" alt="twitterx" />
            </Link>
            <Link href="#">
              <Image width="20" height="20" src="data:image/png;base64,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" alt="instagram-new" />
            </Link>
            <Link href="#">
              <Image width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5klEQVR4nO2cW4gOYRjHX4ecbZHjkiLKscgh5IbknENIbtjacshy4XjlQiSuKYdw40KhCLmglUMIoVjkxq7zWbEUiZ9enq2x7ffO7MzON/PN9/xqLr7e//N88/ybwzvvvPMaoyiKoiiKoihK/ACzgErgK9mhVmqaGbd528g+W+M88izfgfVAT5MRbC3ABqmNWI5E4IIkX28yCrBRaqyMI7m9Tlh6mIwC9JAav8SR/C8m4xBXnWpgRNTAPCUGSoDNQJXc1b4BV4FyoKVPrNVdydfvKHU2miCJgUFAtaOPdRHo5Ii/AlzO1++wdYbCLzHQGagR2TVgItAa6Ags8rSdA5qZlJKkgTtEchlo1UB7KfBKNPNMSknSwGciGe3QVIjmuEkpiRgIdJDmWp8cg0X30KSUpAxsL83fXNc3YJjoqkxKSfIUfiKSCQ7NOtEcMSklSQO3iOQW0K6B9r7AB9HMMCklSQNLgMciuwfMBboBvYHlwFtpO2lSTGIGWoB+wANyc8becEyKSdRAC9AGWCOPTW+l73cWWJDmDnRqDCx0krwG9gYmB9xKPHG9AsaM88S0lmvsQeAG8Bz4JD2BS8BuaW/V1HXGaeAKgjPKE2dvMEF4JPoy4GnAmDfy9NOiqerMh4HPgfM5ts8OA1/kiLEDE8gozxGPOdeB1cBIeSlkh+OHApNkOO22R2sHMDo2RZ35MHCPQ3PLYeDeHDED6x1V9lSdE3CfZ3sGMCqDHIlZN7Aa6N/I/bYd+PcSv7aYDfwJjA257zMlx2ugbbEZ2FXGGssi7v9N+Z/yojKwIYA+wDRgITDGdmsCxNT9z7GiNZB/p7O9Gfzmf14CS31iB4jWDmg0D1tnwRoIDPfMjrA3hdPSrbnmMXSlT4660aDSsHUWpIFAM+C+6A7Uf8IApgO/7JQMOwLkyFPXNxwXts5CNXCSaGpyPZ4Bp0SzzJHnhGjmh62zUA3cLpqdDs0q0RxyaA6LZkmxGXhUNIsdmql+U9OA/QGO0kwaeE40Uxya8aK57tDYURrLqmIz8KZoxjg0I0Rz16HZJZqKYjPwjmhGBHhles+hUQNNbo0aaHLHqYEWNVANDI8aGBE1MCJqYETUwIiogRFRAyOiBubPwIfAvhzbO4eBrrj3jTDwoyNPlUy/S7WBcc2NCWqgH3auTPewdYbGLzH/vlJaFnDrGjKui8+HPkFyDIlSZ2hiS5wy1MCIqIEpNtC+cyVLi03UR2bLWj6bpkamVFg2mIwCbIpz0Ym6KWLfZXWLUpMR5EtSa94PqTGeBXjsojRkn62xmFfvSKz0TPTJAvlZ+klRFEVRFEVRFEUxKeAPkWeriU/B8ukAAAAASUVORK5CYII=" alt="linkedin" />
            </Link>
            <Link href="#">
              <Image width="20" height="20" src="data:image/png;base64,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" alt="youtube-play" />
            </Link>
          </div>
        </div>
        <div className={styles.nav_box}>
          <span className={styles.nav_title}>Resources</span>
          <Link href={`#`}>Integrations</Link>
          <Link href={`#`}>Documentation</Link>
          <Link href={`#`}>API</Link>
          <Link href={`#`}>
            <span>Changelog</span>
            <span className={styles.badge}>New</span>
          </Link>
        </div>
      </nav>
    </>
  )
}