import Link from "next/link";
import styles from "./blog.module.css";
import Image from "next/image";

export const Blog = () => {
  return (
    <div className={styles.blog_container}>
      <div className={styles.blog_info}>
        <h1>Blog.</h1>
        <p className={styles.desc}>Articles, tips, and inspiration curate by our team</p>
        <Link href="#" className={`button_four ${styles.btn_see_all}`}>
          <span>See All</span>
          <span>See All</span>
          <span>See All</span>
        </Link>
      </div>
      <div className={styles.blog_list_container}>
        <Link href="#" className={styles.blog_list}>
          <article className={styles.blog}>
            <figure className={styles.media_container}>
              <Image
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
                width={100}
                height={100}
                alt=""
                className={styles.media}
              />
            </figure>
            <section>
              <span className={styles.timestamp}>10 July, 2025</span>
              <p className={styles.brief}>The psychology behind great product design: what actually hook user</p>
            </section>
          </article>
        </Link>
        <Link href="#" className={styles.blog_list}>
          <article className={styles.blog}>
            <figure className={styles.media_container}>
              <Image
                src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg"
                width={100}
                height={100}
                alt=""
                className={styles.media}
              />
            </figure>
            <section>
              <span className={styles.timestamp}>10 July, 2025</span>
              <p className={styles.brief}>The psychology behind great product design: what actually hook user</p>
            </section>
          </article>
        </Link>
        <Link href="#" className={styles.blog_list}>
          <article className={styles.blog}>
            <figure className={styles.media_container}>
              <Image
                src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg"
                width={100}
                height={100}
                alt=""
                className={styles.media}
              />
            </figure>
            <section>
              <span className={styles.timestamp}>10 July, 2025</span>
              <p className={styles.brief}>The psychology behind great product design: what actually hook user</p>
            </section>
          </article>
        </Link>
      </div>
    </div>
  )
}