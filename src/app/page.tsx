import { Button } from "@/components/2025/week-48/Button";
import styles from "./page.module.css";
import { Icon, Label } from "@/components/2025/week-48/Button";

export default function Home() {
  return (
    <main className={styles.center}>
      <Button
        Icon={<Icon />}
        Label={<Label text="Button with icon" />}
      />
      <Button Label={<Label text="With no icon" />} />
      <Button Icon={<Icon />} />
    </main>
  );
}

