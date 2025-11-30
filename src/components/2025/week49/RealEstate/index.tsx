"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { Listing } from "./data";

export const PropertyListing = () => {
  const [propertyListing, setPropertyListing] = React.useState(Listing);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Residences</h1>
        <div>
          <p className={styles.text}>We found <b>{Listing.length} properties</b></p>
          <div className={styles.sort}>
            <span>Sort By:</span>
            <select
              onChange={(event) => {
                setPropertyListing(() => {
                  const listing = propertyListing.sort((a: any, b: any) => {
                    if (event.target.value === "high") {
                      return b.price - a.price;
                    }
                    return a.price - b.price;
                  })
                  
                  return [...listing];
                })
              }}
            >
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
          <div className={styles.toggle_view}>
            <label className={styles.button_grid}>
              <input type="radio" name="view" className={styles.grid_input} defaultChecked />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </label>
            <label className={styles.button_list}>
              <input type="radio" name="view" className={styles.list_input} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
            </label>
          </div>
        </div>
      </header>
      <main className={`${styles.contents}`}>
        <View propertyListing={propertyListing} />
      </main>
    </section>
  )
}

type Props = {
  propertyListing: {
    image: string,
    link: string,
    favorite: boolean,
    title: string,
    place: string,
    price: number,
    currency: string,
    amenities: {
      beds: string,
      washrooms: string,
      area: string,
    }
  }[]
}

const View = ({ propertyListing }: Props) => {
  return (
    <>
      {
        propertyListing.map((item, index) => (
          <div className={styles.card} key={index}>
            {
              item.favorite && <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(227 39 0 / 0.8)" stroke="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-heart-icon lucide-heart ${styles.liked}`}><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
            }
            {
              !item.favorite && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(227 39 0 / 0.8)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-heart-icon lucide-heart ${styles.liked}`}><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
            }
            <Image
              src={item.image}
              width={1200}
              height={1200}
              alt=""
              loading="eager"
              className={styles.card_media}
            />
            <div className={styles.card_contents}>
              <div>
                <Link href={item.link} className={styles.title}>{item.title}</Link>
                <span className={styles.price}>{item.currency}{item.price}</span>
              </div>
              <span className={styles.place}>{item.place}</span>
              <div>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-icon lucide-bed"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
                  <span className={styles.amenities_text}>{item.amenities.beds}</span>
                </span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>
                  <span className={styles.amenities_text}>{item.amenities.washrooms}</span>
                </span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                  <span className={styles.amenities_text}>{item.amenities.area} <sup>2</sup></span>
                </span>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}