"use client";

import styles from "./styles.module.css";
import { Products } from "./data";
import React from "react";
import { parseAsNativeArrayOf, parseAsString, useQueryState } from "nuqs";
import Image from "next/image";
import Link from "next/link";

export const ProductListing = () => {
  const [list, setList] = React.useState(Products);
  const [category, setCategory] = useQueryState("categories", parseAsNativeArrayOf(parseAsString));

  React.useEffect(() => {
    if (category.length === 0) {
      return setList(Products);
    }

    setList(() => {
      const newList = Products.filter(product => {
        for (let i = 0; i <= category.length - 1; i++) {
          if (product.category === category[i]) {
            return product;
          }

          if (product.deliveryType === category[i]) {
            return product;
          }

          for (let j = 0; j < product.colors.length - 1; j++) {
            if (product.colors[j] === category[i]) {
              return product;
            }
          }
        }
      });

      return [...newList];
    })
  }, [category]);

  const filterCategory = (event: any, categoryItem: string) => {
    setCategory(() => {
      if (event.target.checked && !category.includes(categoryItem)) {
        return [...category, categoryItem];
      }
      return category.filter(product => product !== categoryItem && product);
    })
  }

  return (
    <section className={styles.listing}>
      <section className={styles.filter}>
        <div className={`${styles.section} ${styles.category}`}>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
            <span className={styles.filter_title}>Category</span>
          </div>
          <label>
            <input
              type="checkbox"
              name="basketball"
              defaultChecked={category.join(" ").includes("Basketball") ? true : false}
              onChange={(event) => filterCategory(event, "Basketball")}
            />
            <span className={styles.label}>Basketball</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="football"
              defaultChecked={category.join(" ").includes("Football") ? true : false}
              onChange={(event) => filterCategory(event, "Football")}
            />
            <span className={styles.label}>Football</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="jordan"
              defaultChecked={category.join(" ").includes("Jordan") ? true : false}
              onChange={(event) => filterCategory(event, "Jordan")}
            />
            <span className={styles.label}>Jordan</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="running"
              defaultChecked={category.join(" ").includes("Running") ? true : false}
              onChange={(event) => filterCategory(event, "Running")}
            />
            <span className={styles.label}>Running</span>
          </label>
        </div>


        <div className={`${styles.section} ${styles.delivery_type}`}>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-van-icon lucide-van"><path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3"/><path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
            <span className={styles.filter_title}>Free Delivery Only</span>
          </div>
          <label>
            <input
              type="checkbox"
              name="Free Delivery"
              defaultChecked={category.join(" ").includes("Free Delivery") ? true : false}
              onChange={(event) => filterCategory(event, "Free Delivery")}
            />
          </label>
        </div>



        <div className={`${styles.section} ${styles.colors}`}>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paint-bucket-icon lucide-paint-bucket"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/></svg>
            <span className={styles.filter_title}>Colors</span>
          </div>
          <ul>
            <li>
              <label style={{ "--color": "beige" }}>
                <input
                  type="checkbox"
                  name="Beige"
                  className={styles.beige}
                  defaultChecked={category.join(" ").includes("Beige") ? true : false}
                  onChange={(event) => filterCategory(event, "Beige")}
                />
                <span>Beige</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "black" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Black")}
                  defaultChecked={category.join(" ").includes("Black") ? true : false}
                />
                <span>Black</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "blue" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Blue")}
                  defaultChecked={category.join(" ").includes("Blue") ? true : false}
                />
                <span>Blue</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "brown" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Brown")}
                  defaultChecked={category.join(" ").includes("Brown") ? true : false}
                />
                <span>Brown</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "gray" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Gray")}
                  defaultChecked={category.join(" ").includes("Gray") ? true : false}
                />
                <span>Gray</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "green" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Green")}
                  defaultChecked={category.join(" ").includes("Green") ? true : false}
                />
                <span>Green</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "orange" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Orange")}
                  defaultChecked={category.join(" ").includes("Orange") ? true : false}
                />
                <span>Orange</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "pink" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Pink")}
                  defaultChecked={category.join(" ").includes("Pink") ? true : false}
                />
                <span>Pink</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "purple" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Purple")}
                  defaultChecked={category.join(" ").includes("Purple") ? true : false}
                />
                <span>Purple</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "red" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Red")}
                  defaultChecked={category.join(" ").includes("Red") ? true : false}
                />
                <span>Red</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "white" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "White")}
                  defaultChecked={category.join(" ").includes("White") ? true : false}
                />
                <span>White</span>
              </label>
            </li>
            <li>
              <label style={{ "--color": "yellow" }}>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Yellow")}
                  defaultChecked={category.join(" ").includes("Yellow") ? true : false}
                />
                <span>Yellow</span>
              </label>
            </li>
          </ul>
        </div>
      </section>





      <section className={styles.list}>
        {
          list.map((item) => (
            <div className={styles.card} key={item.id}>
              <Link href={item.link}>
                <Image
                  className={styles.image}
                  src={item.image}
                  width={1200}
                  height={900}
                  alt={item?.alt}
                />
              </Link>
              <div className={styles.product_info}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.colors}>
                  {
                    item.colors.map(color => (
                      <span key={color}>{color} </span>
                    ))
                  }
                </span>
                <span className={styles.range}>{item.range}</span>
                <span className={styles.delivery}>{item.deliveryType}</span>
                <span className={styles.price}>{item.price}</span>
              </div>
            </div>
          ))
        }
      </section>
    </section>
  )
}