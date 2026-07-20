import Link from "next/link";
import styles from "../../styles.module.css";
import Image from "next/image";
import audio from "../../assets/audio.gif";

type TItem = {
  id: number,
  name: string,
  handle: string,
  avatar: string,
  color: string,
  host: boolean,
  mute: boolean,
  video: boolean,
}

type Props = {
  default: TItem[];
}

export const Participante = ({ ...props }: Props) => {

  return (
    <ul className={styles.participante_list}>
      {
        props.default.map((item: TItem) => (
          <li className={styles.participante} key={item.id}>
            <span className={styles.avatar} style={{ "--bg-color": item.color }}>{item.avatar}</span>
            <Link href="#" className={styles.participante_info}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.handle}>{item.handle}</span>
            </Link>
            <div className={styles.meta_info}>
              {item.host && <span className={styles.host}>Host</span>}
              {
                item.mute
                ?
                <button className={styles.mute}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(42 42 42)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic-off-icon lucide-mic-off"><path d="M12 19v3"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M16.95 16.95A7 7 0 0 1 5 12v-2"/><path d="M18.89 13.23A7 7 0 0 0 19 12v-2"/><path d="m2 2 20 20"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/></svg>
                </button>
                :
                <button className={styles.unmute}>
                  <Image src={audio} width={16} height={16} alt="" />
                </button>
              }
              {
                item.video
                ?
                <button className={styles.camera}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(18 149 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                </button>
                :
                <button className={styles.no_camera}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(42 42 42)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-off-icon lucide-video-off"><path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="m2 2 20 20"/></svg>
                </button>
              }
            </div>
          </li>
        ))
      }
    </ul>
  )
}