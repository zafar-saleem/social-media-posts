import styles from "./styles.module.css";
import {BLOGS} from "./data";
import Image from "next/image";

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <h1 className={styles.blog_title}>Our Blog</h1>
      <HeroSection {...BLOGS.filter(item => item.type === "high_rated")[0]} />
      <ArticlesList
        title="Top Articles"
        type="blog_top"
        articles={BLOGS.filter(item => item.type === "top_articles")}
      />
      <ArticlesList
        title="Continue Reading"
        type="continue_reading"
        articles={BLOGS.filter(item => item.type === "continue_reading")}
      />
      <button className={styles.button_more}>Read More</button>
    </div>
  )
}

const HeroSection = ({ ...props }) => {
  return (
    <article className={styles.blog_hero}>
      <Image
        src={props.image.src}
        width={props.image.width}
        height={props.image.height}
        alt={props.image.alt}
        className={styles.hero_image}
      />
      <div className={styles.block}>
        <div className={styles.group}>
          <span className={styles.blog_category}>{props.category}</span> | <span className={styles.blog_read}>{props.read_time}</span>
          <div>
            <span className={styles.hero_avatar}>{props.author.split("")[0]}</span>
            <span className={styles.hero_author}>{props.author}</span>
          </div>
        </div>
        <h2 className={styles.hero_title}>{props.title}</h2>
        <p className={styles.hero_copy}>{props.copy}</p>
      </div>
    </article>
  )
}

const ArticlesList = ({ title, articles, type }) => {
  return (
    <div className={styles[type]}>
      <h2 className={styles.top_title}>{title}</h2>
      <div className={styles.magazine_grid}>
        {
          articles.map(article => <Article {...article} key={article.id} />)
        }
      </div>
    </div>
  )
}

const Article = ({ ...props }) => {
  return (
    <article className={styles.article}>
      <Image
        src={props.image.src}
        width={props.image.width}
        height={props.image.height}
        alt={props.image.alt}
        className={styles.top_image}
      />
      <div className={styles.block}>
        <span className={styles.blog_category}>{props.category}</span>
        <h3 className={styles.article_title}>{props.title}</h3>
        <p className={styles.hero_copy}>{props.copy}</p>
        <div className={styles.group}>
          <div>
            <span className={styles.blog_author}>{props.author.split("")[0]}</span>
          </div> | 
          <div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history-icon lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
            <span className={styles.blog_read}>{props.read_time}</span>
          </div>
        </div>
      </div>
    </article>
  )
}