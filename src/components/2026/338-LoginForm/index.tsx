import styles from "./styles.module.css";
import logo from "./assets/Icon.png";
import Link from "next/link";
import Image from "next/image";

export const LoginForm = () => {
  return (
    <form className={styles.login}>
      <Link href="#">
        <Image
          src={logo}
          width={100}
          height={100}
          alt=""
          className={styles.login_logo}
        />
      </Link>
      <div className={styles.login_copy}>
        <h1 className={styles.login_title}>Welcome back</h1>
        <p className={styles.login_subtitle}>Sign in to your account to continue</p>
      </div>
      <div className={styles.login_social}>
        <Link href="#" className={styles.social_google}>
          <Image width="24" height="24" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
          <span>Google</span>
        </Link>
        <Link href="#" className={styles.social_github}>
          <Image width="24" height="24" src="https://img.icons8.com/ios-glyphs/90/github.png" alt="github"/>
          <span>Github</span>
        </Link>
      </div>
      <p className={styles.separator}>Or Continue With</p>
      <label className={styles.login_label}>
        <div className={styles.label}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(194, 122, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          <span className={styles.label_text}>Email address</span>
        </div>
        <input type="email" className={styles.label_field} placeholder="name@email.com" />
      </label>
      <label className={styles.login_label}>
        <div className={styles.label}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(194, 122, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span className={styles.label_text}>Password</span>
        </div>
        <input type="password" className={styles.label_field} placeholder="************" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
      </label>

      <div className={styles.group}>
        <label className={styles.login_label}>
          <input type="checkbox" className={styles.label_checkbox} />
          <span className={styles.label_text}>Remember me</span>
        </label>
        <Link href="#" className={styles.login_forgot}>Forgot password?</Link>
      </div>

      <button className={styles.login_button}>
        <span>Sign in</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>

      

      <p className={styles.login_create}>
        Don't have an account? <Link href="#">Sign up</Link>
      </p>

      <Link href="#" className={styles.back_action}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        <span>Back to homepage</span>
      </Link>
    </form>
  )
}