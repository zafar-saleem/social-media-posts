import styles from "../../../../SignUp.module.css";
import { LabelProps } from "./types";

const screen_label_icons: any = {
  info: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>,
  contact: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>,
  security: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cctv-icon lucide-cctv"><path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"/><path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/><path d="M2 21v-4"/><path d="M7 9h.01"/></svg>,
  review: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(68 151 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-eye-icon lucide-scan-eye"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg>,
}

export const ScreenLabel = ({
  label,
  short,
  screen_name,
}: LabelProps) => {
  return (
    <section className={styles.section_label}>
      {screen_label_icons[screen_name]}
      <div>
        <span className={styles.personal_info}>{label}</span>
        <span className={styles.personal_short}>{short}</span>
      </div>
    </section>
  )
}
