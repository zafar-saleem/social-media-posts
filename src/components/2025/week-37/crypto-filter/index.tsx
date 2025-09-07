"use client";

import React from "react";
import styles from "./filter.module.css";
import Link from "next/link";
import Image from "next/image";

const tokensList = [
  {
    icon: <svg viewBox="0 0 48 48" width="36px" height="36px">
            <polygon fill="#9FA8DA" points="11,24 25,2 39,24 25,32 "/>
            <polygon fill="#7986CB" points="25,2 39,24 25,32 "/>
            <polygon fill="#9FA8DA" points="11,27 25,35 39,27 25,46 "/>
            <polygon fill="#7986CB" points="25,35 39,27 25,46 "/>
            <polygon fill="#7986CB" points="11,24 25,18 39,24 25,32 "/>
            <polygon fill="#5C6BC0" points="25,18 39,24 25,32 "/>
          </svg>,
    name: "Ethereum",
    value: "0.00048 ETH",
    selling_value: "$0.85",
  },
  {
    icon: <svg x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ffc107" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#fff8e1" d="M17,34V14h8.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H17z M21,22h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"></path><path fill="#fff8e1" d="M20 11h3v5h-3V11zM25 11h3v5h-3V11zM20 32h3v5h-3V32zM25 32h3v5h-3V32z"></path>
          </svg>,
    name: "Yup",
    value: "25 YUP",
    selling_value: "$0.01",
  },
  {
    icon: <svg x="0px" y="0px" width="36" height="30" viewBox="0 0 40 40">
            <path fill="#f5ce85" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path><path fill="#967a44" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path><path fill="#967a44" d="M17 8H19V12.615H17zM21 8H23V12.615H21zM17 27.385H19V32H17zM21 27.385H23V32H21z"></path><path fill="#967a44" d="M14,11h6.681c1.322,0,2.308,0.059,2.959,0.178c0.65,0.119,1.231,0.366,1.744,0.743 c0.513,0.377,0.94,0.878,1.283,1.504c0.342,0.626,0.513,1.328,0.513,2.106c0,0.843-0.211,1.617-0.633,2.32 c-0.422,0.704-0.994,1.232-1.716,1.584c1.019,0.319,1.801,0.864,2.348,1.633C27.727,21.838,28,22.742,28,23.782 c0,0.819-0.177,1.615-0.53,2.388c-0.353,0.773-0.836,1.392-1.448,1.854c-0.612,0.463-1.366,0.747-2.263,0.853 c-0.562,0.066-1.919,0.106-4.07,0.123H14V11z M17.375,13.996v4.162h2.211c1.315,0,2.132-0.02,2.451-0.061 c0.578-0.074,1.032-0.288,1.363-0.644c0.331-0.356,0.496-0.825,0.496-1.406c0-0.557-0.142-1.009-0.427-1.357 c-0.285-0.348-0.709-0.559-1.271-0.632c-0.335-0.041-1.296-0.061-2.884-0.061H17.375z M17.375,21.154v4.813h3.124 c1.216,0,1.988-0.037,2.314-0.11c0.502-0.098,0.91-0.337,1.226-0.718c0.315-0.38,0.473-0.89,0.473-1.529 c0-0.54-0.121-0.999-0.365-1.375s-0.595-0.651-1.054-0.823c-0.46-0.172-1.458-0.258-2.993-0.258H17.375z"></path>
          </svg>,
    name: "mfercoin",
    value: "0.12 MFER",
    selling_value: "$0.00",
  }
];

const collectiblesList = [
  {
    name: "balance",
    image_src: "https://images.pexels.com/photos/14358446/pexels-photo-14358446.jpeg",
    alt: "Balance",
  },
  {
    name: "mesh",
    image_src: "https://images.pexels.com/photos/14354112/pexels-photo-14354112.jpeg",
    alt: "Mesh",
  },
];

export const CryptoFilter = () => {
  const [isFilter, setIsFilter] = React.useState("");
  const [tokens, setTokens] = React.useState(tokensList);
  const [collectibles, setCollectibles] = React.useState(collectiblesList);

  const Filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      isFilter === "collectibles" ? setCollectibles(collectiblesList) : setTokens(tokensList);
      return;
    }
    
    if (isFilter === "collectibles") {
      setCollectibles(() => collectibles.filter(item => {
        return item.name.toLowerCase().includes(event.target.value.toLowerCase());
      }));

      return;
    }

    if (isFilter === "tokens") {
      setTokens(() => tokens.filter(item => {
        return item.name.toLowerCase().includes(event.target.value.toLowerCase());
      }));

      return;
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={`
          ${isFilter === "tokens" || isFilter === "collectibles" ? styles.set_height : null }
          ${styles.tabs}
        `}
      >
        <label
          className={`
              ${isFilter === "tokens" || isFilter === "collectibles" ? styles.scale_down : styles.scale_up }
              ${styles.tab}
            `}
          >
          <input type="radio" name="tab" className={styles.tokens_tab} defaultChecked />
          <span className={styles.tab_label}>Tokens</span>
        </label>
        <label
          className={`
              ${isFilter === "tokens" || isFilter === "collectibles" ? styles.scale_down : styles.scale_up }
              ${styles.tab}
            `}
          >
          <input type="radio" name="tab" className={styles.collectibles_tab} />
          <span className={styles.tab_label}>Collectibles</span>
        </label>
        <div
          className={`
              ${styles.filter_container}
              ${isFilter === "tokens" || isFilter === "collectibles" ? styles.toggle_slide : null }
            `}
          >
          <div
            className={`
              ${styles.filter} ${styles.filter_tokens}
            `}
          >
            <input
              type="search"
              placeholder="Search tokens"
              onChange={Filter}
            />
            <button className={`${styles.btn} ${styles.btn_filter_tokens}`} onClick={() => setIsFilter("tokens")}>
              <svg
                width="18" height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(140 140 142)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34"/>
                <circle cx="11" cy="11" r="8"/>
              </svg>
            </button>
            <button className={styles.btn_done} onClick={() => setIsFilter("")}>Done</button>
          </div>
          
          <div className={`${styles.filter} ${styles.filter_collectibles}`}>
            <input
              type="search"
              placeholder="Search Collectibles"
              onChange={Filter}
            />
            <button
              className={`
                ${styles.btn}
                ${styles.btn_filter_collectibles}
              `}
              onClick={() => setIsFilter("collectibles")}
            >
              <svg
                width="18" height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(140 140 142)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34"/>
                <circle cx="11" cy="11" r="8"/>
              </svg>
            </button>
            <button className={styles.btn_done} onClick={() => setIsFilter("")}>Done</button>
          </div>
        </div>
      </div>
      <TokenItems tokens={tokens} />
      <CollectibleItems collectibles={collectibles} />
    </div>
  )
}

type Tokens = {
  name: string;
  value: string;
  selling_value: string;
  icon: React.ReactElement;
}

type TokenProps = {
  tokens: Tokens[];
}

const TokenItems = React.memo(({ tokens }: TokenProps) => {
  if (tokens.length === 0 ) return <EmptyState />;

  return (
    <ul className={`${styles.contents} ${styles.token_contents}`}>
      {
        tokens.map((item: Tokens, index: number) => (
          <li className={styles.item} key={index}>
            <Link href="#" className={styles.item_contents}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.texts}>
                <span className={styles.label}>{item.name}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
              <span className={styles.selling_value}>{item.selling_value}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
});

type Collectibles = {
  image_src: string;
  alt: string;
}

type CollectiblesType = {
  collectibles: Collectibles[];
}

const CollectibleItems = React.memo(({ collectibles }: CollectiblesType) => {
  if (collectibles.length === 0 ) return <EmptyState />

  return (
    <div className={`${styles.contents} ${styles.collectibles_contents}`}>
      {
        collectibles.map((item: Collectibles, index: number) => (
          <Image
            key={index}
            src={item.image_src}
            width={200}
            height={300}
            alt={item.alt}
          />
        ))
      }
    </div>
  )
});

const EmptyState = () => (
  <div className={styles.empty_state}>
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgb(244 243 243)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`${styles.empty_state_star} lucide lucide-star-icon lucide-star`}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>
    <svg width="152" height="152" viewBox="0 0 24 24" fill="none" stroke="rgb(7 201 121)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`${styles.empty_state_arrow} lucide lucide-arrow-up-right-icon lucide-arrow-up-right`}>
      <path d="M7 7h10v10"/>
      <path d="M7 17 17 7"/>
    </svg>
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgb(244 243 243)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-heart-icon lucide-heart ${styles.empty_state_heart}`}>
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
    </svg>
  </div>
);
