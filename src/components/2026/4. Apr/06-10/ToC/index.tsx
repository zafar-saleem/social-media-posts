import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import React from "react";

const DATA = [
  {
    label: "PCI DSS",
    href: "#",
  },
  {
    label: "What is account data?",
    href: "#",
    children: [
      {
        label: "Merchant and service providers",
        href: "#",
      }
    ]
  },
  {
    label: "PCI DSS scoping",
    href: "#",
    children: [
      {
        label: "What gets evaluated",
        href: "#",
      },
      {
        label: "Understanding your CDE",
        href: "#",
      },
      {
        label: "Understanding the requirements framework",
        href: "#",
      },
      {
        label: "Reporting requirements (attestation)",
        href: "#",
      },
      {
        label: "Merchant of records",
        href: "#",
      },
    ]
  },
  {
    label: "Risks of non-compliance",
    href: "#",
  },
  {
    label: "Estimating compliance impact",
    href: "#",
  },
  {
    label: "Descoping introduction",
    href: "#",
  },
  {
    label: "Where to go from here",
    href: "#",
  },
]

export const ToC = () => {
  return (
    <nav className={styles.toc}>
      {
        DATA.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.href} className={`${styles.toc_item} ${styles.toc_parent_item}`}>
              <span className={`${styles.ind} ${styles.ind_parent}`} />
              <span className={styles.label}>{item.label}</span>
            </Link>
            {
              item.children && item.children.map((child, childIndex) => (
                <React.Fragment key={childIndex}>
                  <Link href={item.href} className={`${styles.toc_item} ${styles.toc_child_item}`}>
                    <span className={`${styles.ind} ${styles.ind_child}`} />
                    <span className={styles.label}>{child.label}</span>
                  </Link>
                </React.Fragment>
              ))
            }
          </React.Fragment>
        ))
      }
    </nav>
  )
}