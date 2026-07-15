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
        <span className={styles.blog_category}>{props.category}</span>
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
      </div>
    </article>
  )
}