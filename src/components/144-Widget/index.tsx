"use client";

import React from "react";
import styles from "./Widget.module.css";
import { Header } from "./components/Header";
import { List } from "./components/List";

export const Widget = () => {
  return (
    <div className={styles.container}>
      <Header />
      <List />
    </div>
  )
}
