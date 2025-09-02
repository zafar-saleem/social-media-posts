"use client";

import Link from "next/link";
import { menu } from "./data";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

export const MegaMenu = () => {
  const [productsState, setProductsState] = React.useState(false);
  const [customersState, setCustomersState] = React.useState(false);
  const [companyState, setCompanyState] = React.useState(false);
  // const [up, setUp] = React.useState(false);

  const Products = () => {
    console.log("PRoducts")
    setProductsState(!productsState);
  };

  const Customers = React.useCallback(() => {
    console.log("Customers")
    setCustomersState(!customersState);
  }, []);

  const Company = React.useCallback(() => {
    console.log("PRoducts")
    setCompanyState(!companyState);
  }, []);

  console.log(productsState);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_container}>
        {
          menu.map((items, index) => (
            <>
              <li key={index} className={styles.nav_menu_container}>
                <button
                  className={styles.nav_menu_link}
                  popoverTarget={`popover_target_${index}`}
                  onMouseEnter={Products}
                  onMouseLeave={Products}
                >
                  <span className={styles.nav_menu_label}>{items.name}</span>
                  <Image
                    src={items.icon}
                    width={20}
                    height={20}
                    alt=""
                    className={`${productsState ? styles.up : styles.down}`}
                  />
                </button>
                <div key={index} className={styles.nav_category_container} popover="auto" id={`popover_target_${index}`}>
                {
                  items.categories?.map((item, i) => (
                    <ul key={i} className={styles.nav_category_menu}>
                      <span className={styles.nav_category_label}>{item.name}</span>
                      {
                        item.items.map((categoryItems, itemIndex) => (
                          <li key={itemIndex} className={styles.nav_category_item}>
                            <Link href="" className={styles.nav_category_link}>
                              <Image src={categoryItems.icon} width={20} height={20} alt="" className={styles.nav_category_item_icon} />
                              <span className={styles.nav_category_label}>{categoryItems.label}</span>
                              <p className={styles.nav_category_description}>{categoryItems.description}</p>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  ))
                  
                }
                </div>
              </li>
            </>
          ))
        }
      </ul>
      {/* <button popoverTarget="target">Target</button>
      <p popover="auto" id="target">PPPPPP</p> */}
    </nav>
  )
}