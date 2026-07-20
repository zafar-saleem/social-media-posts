import styles from "./MegaMenu.module.css";
import React from "react";
import { MenuLabels } from "./components/MenuLabels";

export const MegaMenu = async () => {
  const menu = await import("./menu.json", {
    with: { type: "json", }
  });

  return (
    <nav className={styles.menu}>
      <MenuLabels {...menu} />
    </nav>
  )
}
