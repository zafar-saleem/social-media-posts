import Link from "next/link";
import Image from "next/image";
import styles from "./bento.module.css";

export const GridBento = () => {
  return (
    <div className={styles.bento}>
      <div className={`${styles.bento_item} ${styles.bento_item_one}`}>
        <div className={styles.contents}>
          <q>The beauty of an image lies in the emotions it evokes.</q>
          <span className={styles.author}>- Jimmy Olatinso, Director & CEO</span>
        </div>
        <div className={styles.breadcrumb}>
          <span>features | </span> <span>Image generation</span>
        </div>
      </div>


      <div className={`${styles.bento_item} ${styles.bento_item_two}`}>
        <div className={styles.contents}>
          <span>A community captures not just individuals, but the essence of connection.</span>
        </div>
        <div className={styles.breadcrumb}>
          <Link href="#" className={`${styles.btn}`}>
            <span>Join the community</span>
            <span>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXVwLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtdXAtcmlnaHQiPjxwYXRoIGQ9Ik0xMyA1SDE5VjExIi8+PHBhdGggZD0iTTE5IDVMNSAxOSIvPjwvc3ZnPg=="
                width={20}
                height={20}
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>


      <div className={`${styles.bento_item} ${styles.bento_item_three}`}>
        <Link href="#" className={styles.action_learn}>
          <span>Learn more</span>
          <span>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXVwLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtdXAtcmlnaHQiPjxwYXRoIGQ9Ik0xMyA1SDE5VjExIi8+PHBhdGggZD0iTTE5IDVMNSAxOSIvPjwvc3ZnPg=="
              width={15}
              height={15}
              alt=""
              />
          </span>
        </Link>
        <div className={styles.contents}>
          <span>A photograph captures not just a moment, but the essence of it.</span>
        </div>
        <div className={styles.breadcrumb}>
          <span>features | </span> <span>Image generation</span>
        </div>
      </div>
    </div>
  )
}