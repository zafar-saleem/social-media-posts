import styles from "./page.module.css";
import React from "react";
import { TodoList } from "@/components/2025/week-32/todo-list";

export default function Home() {
  return (
    <main className={styles.center}>
      <TodoList />
    </main>
  );
}
