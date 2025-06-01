import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { TodoDoneEffect } from "@/components/todo-done";

export default function Home() {
  return (
    <main className={styles.center}>
      <TodoDoneEffect />
    </main>
  );
}
