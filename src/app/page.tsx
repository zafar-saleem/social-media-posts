import { PerspectiveEffect } from "@/components/buttons/perspective-effect";
import styles from "./page.module.css";
import React from "react";
import { CTAButton } from "@/components/buttons/cta-2";

export default function Home() {
  return (
    <main className={styles.center}>
      <CTAButton />
    </main>
  );
}
