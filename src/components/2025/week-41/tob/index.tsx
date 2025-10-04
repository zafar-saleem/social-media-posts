"use client";

import Link from "next/link";
import styles from "./tob.module.css";
import React from "react";

const ListItems = [
  {
    label: "Get Started",
    children: [
      {
        label: "Introduction"
      },
      {
        label: "Installation"
      },
      {
        label: "Changelog"
      },
    ]
  },
  {
    label: "Components",
    children: [
      {
        label: "Button",
      },
      {
        label: "Tooltip",
      }
    ]
  }
]

export const TOB = () => {
  const [active, setActive] = React.useState("");

  return (
    <>
      <h1>Table of Contents</h1>
      <ul className={styles.container}>
        {
          ListItems.map((topItem: any, topIndex: number) => (
            <li key={topIndex}>
              <Link
                href=""
                onClick={() => setActive(topItem.label.toLowerCase().replaceAll(" ", "_"))}
                className={`
                  ${active === topItem.label.toLowerCase().replaceAll(" ", "_") && styles.active}
                `}
              >{topItem.label}</Link>
              <ul className={styles.children}>
                {
                  topItem?.children.map((childrenItem: { label: string }, childrenIndex: number) => (
                    <li key={childrenIndex}>
                      <Link
                        href="#"
                        onClick={() => setActive(childrenItem.label.toLowerCase().replaceAll(" ", "_"))}
                        className={`
                          ${active === childrenItem.label.toLowerCase().replaceAll(" ", "_") && styles.active}
                        `}
                      >{childrenItem.label}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </>
  )
}