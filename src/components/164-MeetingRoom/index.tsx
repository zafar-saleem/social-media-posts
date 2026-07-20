import styles from "./styles.module.css";
import { Participante } from "./components/Participants";
import { Chat } from "./components/Chat";
import { Header } from "./components/Header";

export const MeetingRoom = async () => {
  const data = await import("./data.json", {
    with: {
      type: "json"
    }
  });

  return (
    <main className={styles.container}>
      
      <Header totalJoiners={data.length} />
      
      <Participante {...data} />

      <Chat />
    </main>
  )
}
