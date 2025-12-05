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
        <div className={styles.category}>
          <span className={styles.filter_title}>Category</span>
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


        <div className={styles.delivery_type}>
          <span className={styles.filter_title}>Free Delivery Only</span>
          <label>
            <input
              type="checkbox"
              name="Free Delivery"
              defaultChecked={category.join(" ").includes("Free Delivery") ? true : false}
              onChange={(event) => filterCategory(event, "Free Delivery")}
            />
          </label>
        </div>



        <div className={styles.colors}>
          <span className={styles.filter_title}>Colors</span>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="Beige"
                  defaultChecked={category.join(" ").includes("Beige") ? true : false}
                  onChange={(event) => filterCategory(event, "Beige")}
                />
                <span>Beige</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Black")}
                  defaultChecked={category.join(" ").includes("Black") ? true : false}
                />
                <span>Black</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Blue")}
                  defaultChecked={category.join(" ").includes("Blue") ? true : false}
                />
                <span>Blue</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Brown")}
                  defaultChecked={category.join(" ").includes("Brown") ? true : false}
                />
                <span>Brown</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Gray")}
                  defaultChecked={category.join(" ").includes("Gray") ? true : false}
                />
                <span>Gray</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Green")}
                  defaultChecked={category.join(" ").includes("Green") ? true : false}
                />
                <span>Green</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Orange")}
                  defaultChecked={category.join(" ").includes("Orange") ? true : false}
                />
                <span>Orange</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Pink")}
                  defaultChecked={category.join(" ").includes("Pink") ? true : false}
                />
                <span>Pink</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Purple")}
                  defaultChecked={category.join(" ").includes("Purple") ? true : false}
                />
                <span>Purple</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "Red")}
                  defaultChecked={category.join(" ").includes("Red") ? true : false}
                />
                <span>Red</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => filterCategory(event, "White")}
                  defaultChecked={category.join(" ").includes("White") ? true : false}
                />
                <span>White</span>
              </label>
            </li>
            <li>
              <label>
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