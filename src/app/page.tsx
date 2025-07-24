import styles from "./page.module.css";
import React from "react";
import { TagsFilter } from "@/components/2025/week-30/tags-filter";

export default function Home() {
  return (
    <main className={styles.center}>
      <TagsFilter />
    </main>
  );
}
