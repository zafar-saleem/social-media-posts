import Image from "next/image";
import styles from "./link.module.css";

const ICONS = {
  copy: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig4NyA4NyA4NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtY29weS1pY29uIGx1Y2lkZS1jbGlwYm9hcmQtY29weSI+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNCIgeD0iOCIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+PHBhdGggZD0iTTggNEg2YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi0yIi8+PHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMiAydjQiLz48cGF0aCBkPSJNMjEgMTRIMTEiLz48cGF0aCBkPSJtMTUgMTAtNCA0IDQgNCIvPjwvc3ZnPg==",
  link: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig4NyA4NyA4NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rLWljb24gbHVjaWRlLWxpbmsiPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIi8+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIi8+PC9zdmc+",
}

export const ShareLink = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Generate meeting link</span>
      <p className={styles.desc}>
        Link is one time only, copy before closing.
      </p>
      <div className={styles.input_group}>
        <Image
          src={ICONS.link}
          width={20}
          height={20}
          alt=""
          className={styles.link_icon}
        />
        <input type="text" className={styles.link_text} disabled defaultValue="https://meet.example.com/123-asd-321" />
        <button className={styles.copy_icon_container}>
          <Image
            src={ICONS.copy}
            width={20}
            height={20}
            alt=""
            className={styles.copy_icon}
          />
        </button>
      </div>
      <label className={styles.action}>
        <input type="checkbox" className={styles.input_checked}  />
        <span className={styles.action_label}>
          <span>I</span> <span>h</span><span>a</span><span>v</span><span>e</span> <span>s</span><span>a</span><span>v</span><span>e</span><span>d</span> <span>t</span><span>h</span><span>e</span> <span>m</span><span>e</span><span>e</span><span>t</span><span>i</span><span>n</span><span>g</span> <span>l</span><span>i</span><span>n</span><span>k</span><span>.</span>
        </span>
      </label>
      <div className={styles.action_container}>
        <button>Create new link</button>
        <button>Complete</button>
      </div>
    </div>
  )
}